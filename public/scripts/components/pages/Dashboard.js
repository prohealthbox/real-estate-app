import React from 'react';
import {browserHistory} from 'react-router';
import Rayon from 'rayon';
import SessionModel from './../../models/SessionModel';
import users from './../../collections/UserCollection';

export default React.createClass({
	getInitialState: function() {
		return {
			profileModalVisible: false,
			user: SessionModel,
			users: users,
			editingPropId: null
		};
	},
	componentDidMount: function() {
		users.on('update', this.updateUsers);
		this.state.users.on('change', this.updateUsers);
		users.fetch();
	},
	componentWillUnmount: function() {
		users.off('update');
	},
	updateUsers: function() {
		this.setState({users: users});
	},
	render: function() {
		return (
			<div>
				<div className="dashboardDiv pageDiv">
					<a className="breadCrumbs crumbOne" href="/">Home</a>
					<h2>Agent Dashboard</h2>
					<div className="dashboardButtons">
						<button className="dashboardButton" onClick={this.newListing}>New Listing</button>
						<button className="dashboardButton" onClick={this.editListing}>Edit Listing</button>
						<button className="dashboardButton" onClick={this.profileOpenModal}>Edit Profile</button>
					</div>
				</div>
				<Rayon className="profileForm" isOpen={this.state.profileModalVisible} onClose={this.profileCloseModal}>
					<form onChange={this.formChange} onSubmit={this.formSubmit}>
						<div className="editProfileForm">
							<div>
								<span>First Name</span>
								<input type="text" placeholder="Jon" data-key="firstName" defaultValue={this.state.user.get('firstName')} ref="firstName"/>
							</div>
							<div>
								<span>Last Name</span>
								<input type="text" placeholder="Snow" data-key="lastName" defaultValue={this.state.user.get('lastName')} ref="lastName"/>
							</div>
							<div>
								<span>Phone</span>
								<input type="text" placeholder="555-555-5555" data-key="phone" defaultValue={this.state.user.get('phone')} ref="phone"/>
							</div>
							<div>
								<span>Email</span>
								<input type="email" placeholder="email@example.com" data-key="email" defaultValue={this.state.user.get('email')} ref="email"/>
							</div>	
							<div>
								<span>Bio</span>
								<textarea placeholder="Bio (500 character max)" data-key="bio" defaultValue={this.state.user.get('bio')} ref="bio"/>
							</div>
							<div>
								<span><i className="fa fa-facebook-square"></i></span>
								<input type="text" placeholder="http://..." data-key="facebook" defaultValue={this.state.user.get('facebook')} ref="facebook"/>
							</div>
							<div>
								<span><span><i className="fa fa-twitter-square"></i></span></span>
								<input type="text" placeholder="http://..." data-key="twitter" defaultValue={this.state.user.get('twitter')} ref="twitter"/>
							</div>
							<div>
								<span><i className="fa fa-linkedin-square"></i></span>
								<input type="text" placeholder="http://..." data-key="linkedin" defaultValue={this.state.user.get('linkedin')} ref="linkedin"/>
							</div>
							<div className="updateButtonDiv">
								<button>Update</button>
							</div>
						</div>
					</form>
					<div className="updateCancelDiv">
						<button onClick={this.profileCloseModal}>Cancel</button>
					</div>
				</Rayon>
			</div>
			);
	},
	profileOpenModal: function() {
		this.setState({
			profileModalVisible: true
		});
	},
	profileCloseModal: function() {
		this.setState({
			profileModalVisible: false
		});
	},
	formChange: function(e) {
		// console.log(e.target.dataset.key);
		this.state.user.set(e.target.dataset.key, e.target.value);
		this.setState({
			user: this.state.user
		});
	},
	formSubmit: function(e) {
		e.preventDefault();
		this.state.user.save(null, {success: this.profileCloseModal});
	},
	newListing: function() {
		browserHistory.push('/dashboard/newlisting');
	},
	editListing: function() {
		browserHistory.push('/dashboard/editlisting');
	}
});



