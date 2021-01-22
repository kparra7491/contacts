import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { GlobalState } from "../store/appContext";

import PropTypes from "prop-types";

export const EditContact = props => {
	const { store, actions } = useContext(GlobalState);
	const info = store.contacts.find(element => element.id == props.match.params.id);

	const [contact, setContact] = useState({
		name: info ? info.full_name : "",
		email: info ? info.email : "",
		phone: info ? info.phone : "",
		address: info ? info.address : "",
		id: info ? info.id : ""
	});

	const handleChange = e => {
		console.log(e.target);
		setContact({ ...contact, [e.target.name]: e.target.value });
	};

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Edit Contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							value={contact.name}
							onChange={handleChange}
							name="name"
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							value={contact.email}
							onChange={handleChange}
							name="email"
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							value={contact.phone}
							onChange={handleChange}
							name="phone"
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							value={contact.address}
							onChange={handleChange}
							name="address"
						/>
					</div>
					{/* <Link className="mt-3 w-100 text-center" to="/"> */}
					<button
						type="button"
						className="btn btn-primary form-control"
						onClick={e => {
							actions.updateContact(contact);
							props.history.push("/");
						}}>
						save
					</button>
					{/* </Link> */}
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
EditContact.propTypes = {
	match: PropTypes.object,
	history: PropTypes.object
};
