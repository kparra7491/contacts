const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contacts: [],
			response: {}
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
			},

			updateContact: id => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
                */
				fetch("https://assets.breatheco.de/apis/fake/contact/" + id.id, {
					method: "PUT", // or 'POST'
					body: JSON.stringify({
						full_name: id.name,
						email: id.email,
						agenda_slug: "kparra",
						address: id.address,
						phone: id.phone
					}), // data can be `string` or {object}!
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
							console.log("error after response");
						}
						return response.json();
					})
					.then(jsonifiedResponse => {
						console.log(jsonifiedResponse);
						getActions().loadInitialData();
					})

					.catch(function(error) {
						console.log("ya broke it", error);
					});
			},
			addContact: id => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
                */
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST", // or 'POST'
					body: JSON.stringify({
						full_name: id.name,
						email: id.email,
						agenda_slug: "kparra",
						address: id.address,
						phone: id.phone
					}), // data can be `string` or {object}!
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
							console.log("error after response");
						}
						return response.json();
					})
					.then(jsonifiedResponse => {
						console.log(jsonifiedResponse);
						getActions().loadInitialData();
					})

					.catch(function(error) {
						console.log("ya broke it", error);
					});
			},
			deleteContact: id => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
                */
				fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
					method: "DELETE", // or 'POST'
					body: "", // data can be `string` or {object}!
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
							console.log("error after response");
						}
						return response.json();
					})
					.then(jsonifiedResponse => {
						console.log(jsonifiedResponse);
						getActions().loadInitialData();
					})

					.catch(function(error) {
						console.log("ya broke it", error);
					});
			},

			searchContacts: term => {
				console.log(term);
			}
		}
	};
};

export default getState;
