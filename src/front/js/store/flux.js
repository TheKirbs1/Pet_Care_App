const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			signupMessage: null,
			isSignUpSuccessful: false,
			isLoginSuccessful: false,
			loginMessage: null,
			email: null,
			password: null,
			isAccountActive: true,
			userDogs: [],

		},
		actions: {

			syncTokenFromSessionStore: () => {
				const sessionToken = sessionStorage.getItem('token');
				console.log("Application just loaded. Syncing the sessionStorage token.")
				if (sessionToken && sessionToken !== "" && sessionToken !== undefined) {
					setStore({ token: sessionToken })
				}
			},


			signup: async (email, password) => {
				const options = {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						email: email,
						password: password
					}),
				}
				const response = await fetch(`${process.env.BACKEND_URL}api/signup`, options)

				if (!response.ok) {
					const data = await response.json()
					setStore({ signupMessage: data.msg })
					return {
						error: {
							status: response.status,
							statusText: response.statusText
						}
					}
				}

				const data = await response.json()
				setStore({
					signupMessage: data.msg,
					isSignUpSuccessful: response.ok
				})
				return data;
			},

			login: async (email, password) => {
				let response = await fetch(process.env.BACKEND_URL + "/api/login", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						email: email, password: password
					})

				})
				if (response.status != 200) {
					console.log(response.status)
					return false
				} else {
					let data = await response.json()
					console.log(data)
					sessionStorage.setItem("token", data.token)
					return true
				}
			},

			logout: () => {
				sessionStorage.removeItem("token")
				setStore({
					token: null,
					signupMessage: null,
					isSignUpSuccessful: false,
					isLoginSuccessful: false,
					loginMessage: null,
				})
			},


			editUserSettings: async (email, password) => {
				try {
					const token = sessionStorage.getItem('token');
					const response = await fetch(`${process.env.BACKEND_URL}/api/edit-user`, {
						method: 'PUT',
						headers: {
							'Content-Type': 'application/json',
							'Authorization': `Bearer ${token}`,
						},
						body: JSON.stringify({ email, password }),
					});

					if (!response.ok) {
						const data = await response.json();
						setStore({ editUserError: data.msg });
						return { error: data.msg };
					}

					const data = await response.json();
					setStore({ userEmail: email, userPassword: password, editUserSuccess: data.msg });
					return { msg: data.msg };
				} catch (error) {
					console.error('Error editing user settings:', error);
					setStore({ editUserError: 'An error occurred while editing user settings.' });
					return { error: 'An error occurred while editing user settings.' };
				}
			},

			deactivateAccount: async (email, password) => {
				try {
					const token = sessionStorage.getItem('token');
					const response = await fetch(`${process.env.BACKEND_URL}/api/deactivate-account`, {
						method: 'PUT',
						headers: {
							'Content-Type': 'application/json',
							'Authorization': `Bearer ${token}`,
						},
						body: JSON.stringify({ email, password, is_active: false }),
					});

					if (!response.ok) {
						const data = await response.json();
						return { error: data.msg };
					}

					const data = await response.json();
					setStore({ isAccountActive: false });
					return { msg: data.msg };
				} catch (error) {
					console.error('Error deactivating account:', error);
					return { error: 'An error occurred while deactivating the account.' };
				}
			},

			reactivateAccount: async (email, password) => {
				try {
					const token = sessionStorage.getItem('token');
					const response = await fetch(`${process.env.BACKEND_URL}/api/deactivate-account`, {
						method: 'PUT',
						headers: {
							'Content-Type': 'application/json',
							'Authorization': `Bearer ${token}`,
						},
						body: JSON.stringify({ email, password, is_active: true }),
					});

					if (!response.ok) {
						const data = await response.json();
						return { error: data.msg };
					}

					const data = await response.json();
					setStore({ isAccountActive: true });
					return { msg: data.msg };
				} catch (error) {
					console.error('Error reactivating account:', error);
					return { error: 'An error occurred while reactivating the account.' };
				}
			},

			savePetInfo: async (petInfo) => {
				let token = getStore().token;
				try {
					const response = await fetch(`${process.env.BACKEND_URL}api/private/pet_registration`, {
						method: 'POST',
						mode: 'cors',
						headers: {
							'Content-type': 'application/json',
							'Authorization': "Bearer " + token,
						},
						body: JSON.stringify(petInfo)
					})
					const data = await response.json();
					console.log('Pet information saved:', data)
					setStore({ petInfo: data })
				} catch (error) {
					console.error('Error saving pet information:', error)
				}

			},

			getProfile: async () => {
				let response = await fetch(process.env.BACKEND_URL + "api/private", {
					method: 'GET',
					mode: 'cors',
					headers: {
						'Content-Type': 'application/json',
						'Authorization': "Bearer " + sessionStorage.getItem("token")
					}
				})
				if (!response.ok) {
					console.log(response.status)
					console.log(response.json())
					return false;
				} else {
					let data = await response.json()
					console.log(data)
					setStore({ user: data.user })
					return data.user;
				}
			},
			
		}
	}
};

export default getState;
