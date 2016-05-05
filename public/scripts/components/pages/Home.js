import React from 'react';
import {Link} from 'react-router';
import $ from 'jquery';
import Rayon from 'rayon';

export default React.createClass({
	getInitialState: function() {
		return {
			regModalVisible: false,
			logModalVisible: false
		};
	},
	render: function() {
		return (
			<div className="homeContainer">
				<h1>Home Finder Lite</h1>
				<div className="homeBox">
					<Link to="/forsale">Find a Home for Sale</Link>
				</div>
				<div className="homeBox">
					<Link to="/forrent">Find a Home for Rent</Link>
				</div>
				<div className="homeBox">
					<Link to="/findagent">Find an Agent</Link>
				</div>
				<a className="homeBox" onClick={this.regOpenModal}>Register</a>
				<Rayon className="regForm" isOpen={this.state.regModalVisible} onClose={this.regCloseModal}>
					<form action="/auth/register" method="post">
						<div>
							<input type="text" placeholder="first name" name="firstName"/>
						</div>
						<div>
							<input type="text" placeholder="last name" name="lastName"/>
						</div>
						<div>
							<input type="text" placeholder="phone" name="phone"/>
						</div>
						<div>
							<input type="email" placeholder="email" name="email"/>
						</div>
						<div>
							<input type="text" placeholder="bio" name="bio"/>
						</div>
						<div>
							<input type="password" placeholder="password" name="password"/>
						</div>
						<button>Register</button>
					</form>
					<button onClick={this.regCloseModal}>Cancel</button>
				</Rayon>
				<a className="homeBox" onClick={this.logOpenModal}>Login</a>
				<Rayon className="loginForm" isOpen={this.state.logModalVisible} onClose={this.logCloseModal}>
					<form action="auth/login" method="post">
						<div>
							<input type="email" placeholder="email" name="email"/>
						</div>
						<div>
							<input type="password" placeholder="password" name="password"/>
						</div>
						<button>Log in</button>
					</form>
					<button onClick={this.logCloseModal}>Cancel</button>
				</Rayon>
				<input type="filepicker" data-fp-apikey="AWEM8RWC9TUScrspS0Rdiz"
				onchange="alert(event.fpfile.url)" />
			</div>
			);
	},
	regOpenModal: function() {
		this.setState({
			regModalVisible: true
		});
	},
	regCloseModal: function() {
		this.setState({
			regModalVisible: false
		});
	},
	logOpenModal: function() {
		this.setState({
			logModalVisible: true
		});
	},
	logCloseModal: function() {
		this.setState({
			logModalVisible: false
		});
	}
});

// This is from pointer-app
//<h1>Add a new Teacher</h1>
		//		<form className="create-teacher" onSubmit={this.createTeacher}>
	//				<h2>Name</h2>
	//				<input className="u-half-width" type="text" placeholder="First" ref="first" title="First name is required and cannot left blank" required="required"/>
	//				<input className="u-half-width" type="text" placeholder="Last" ref="last" title="Last name is required and cannot left blank" required="required"/>
	//				<h2>Email</h2>
	//				<input className="u-half-width" type="text" ref="email" title="Should be a valid email address" required="required"/>
	//				<h2>Password</h2>
	//				<input className="u-half-width" type="text" ref='password' title="Password is required and cannot left blank" required="required"/>
	//				<button className="button-generate" type="button" onClick={this.generatePassword}>Generate Password</button>
	//				<div className="error">{this.state.errors.email ? this.state.errors.email.message : null}</div>
	//				<button className="button-primary" type='submit'>Create Teacher</button>
      //           	<Rayon isOpen={this.state.modalVisible} onClose={this.closeModal}>
		//					<label className="add-teacher-label">The Teacher was Successfully Created</label>
		//				<footer>
          //              	<button onClick={this.closeModal}>Close</button>
            //        	</footer>
              //   	</Rayon>
                // 	</form>

// this is from the Register.ejs file
// <form action="/auth/register" method="post">
// 			<div>
// 				<%- error.display('firstName') %>
// 				<input type="text" placeholder="first name" name="firstName" value="<%= prev.display('body', 'firstName') %>">
// 			</div>
// 			<div>
// 				<%- error.display('lastName') %>
// 				<input type="text" placeholder="last name" name="lastName" value="<%= prev.display('body', 'lastName') %>">
// 			</div>
// 			<div>
// 				<input type="text" placeholder="phone" name="phone" value="<%= prev.display('body', 'phone') %>">
// 			</div>
// 			<div>
// 				<input type="email" placeholder="email" name="email" value="<%= prev.display('body', 'email') %>">
// 			</div>
// 			<div>
// 				<input type="text" placeholder="bio" name="bio" value="<%= prev.display('body', 'bio') %>">
// 			</div>
// 			<div>
// 				<%- error.display('password') %>
// 				<input type="password" placeholder="password" name="password">
// 			</div>
// 			<button>Register</button>
// 		</form>
// 	</body>