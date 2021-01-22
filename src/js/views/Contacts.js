import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";

import { GlobalState } from "../store/appContext";

export const Contacts = () => {
	const [state, setState] = useState({
		showModal: false,
		id: ""
	});
	const { store, actions } = useContext(GlobalState);

	const [search, setSearch] = useState("");

	const handleChange = e => {
		console.log(e.target);
		setSearch(e.target.value);
		actions.searchContacts(e.target.value);
	};

	// const empire = pilots.filter(pilot => pilot.faction === "Empire");
	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<input
					type="text"
					className="form-control"
					placeholder="Search..."
					value={search}
					onChange={handleChange}
					name="search"
				/>

				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{store.contacts.map((item, i) => {
							return (
								<ContactCard
									key={i}
									onDelete={() => setState({ showModal: true, id: item.id })}
									contact={item}
								/>
							);
						})}
					</ul>
				</div>
			</div>
			<Modal show={state.showModal} onClose={() => setState({ showModal: false })} id={state.id} />
		</div>
	);
};
