const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			signupMessage: null,
			isSignUpSuccessful: false,
			isLoginSuccessful: false,
			loginMessage: null,
			userEmail: null,
			userPassword: null,
			isAccountActive: true,
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


			// // Use getActions to call a function within a fuction
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },

			// getMessage: async () => {
			// 	try{
			// 		// fetching data from the backend
			// 		const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
			// 		const data = await resp.json()
			// 		setStore({ message: data.message })
			// 		// don't forget to return something, that is how the async resolves
			// 		return data;
			// 	}catch(error){
			// 		console.log("Error loading message from backend", error)
			// 	}
			// },
			// changeColor: (index, color) => {
			// 	//get the store
			// 	const store = getStore();

			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
			// 	});

			// 	//reset the global store
			// 	setStore({ demo: demo });
			// }
		}
	}
};

export default getState;
