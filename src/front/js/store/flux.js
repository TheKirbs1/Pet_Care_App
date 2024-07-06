const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			signupMessage: null,
			isSignUpSuccessful: false,
			isLoginSuccessful: false,
			loginMessage: null,
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
	}
}
};

export default getState;
