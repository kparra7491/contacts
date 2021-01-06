const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contacts: []
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			loadInitialData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
                */

				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/kparra")
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
							console.log("error after response");
						}
						return response.json();
					})
					.then(jsonifiedResponse => {
						setStore({
							contacts: jsonifiedResponse
						});
					})

					.catch(function(error) {
						console.log("ya broke it", error);
					});
			}
		}
	};
};

export default getState;
