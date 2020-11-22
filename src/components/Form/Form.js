import React from 'react';
import './Form.css';
import Button from '../Button/Button';


class Form extends React.Component {
	constructor(props) {
		super(props);
		this.initialState = {
		    name: '',
			username: '',
			email: '',
			phone: '',
	  	}

		this.state = this.initialState
	}
	handleChange = (event) => {
  		const {name, value} = event.target

		  this.setState({
		    [name]: value,
		  })
	}


	render(){
		const {addElement, isShown, hideModal} = this.props;
		const newUser = this.state;
		const clearUser = (event) => {
			event.preventDefault();
			this.setState(this.initialState);
		}
		const showHideClassName = isShown ? "add_form display-block" : "add_form display-none";
		return(
		
			<div className={showHideClassName}>
				<form className="add_form_content">
					<label htmlFor="name">Name</label>
					<input type="text" name="name" id="name" value={newUser.name} onChange={this.handleChange} />
					<label htmlFor="username">Username</label>
					<input type="text" name="username" id="username" value={newUser.username} onChange={this.handleChange} />
					<label htmlFor="email">Email</label>
					<input type="text" name="email" id="email" value={newUser.email} onChange={this.handleChange} />
					<label htmlFor="phone">Phone</label>
					<input type="text" name="phone" id="phone" value={newUser.phone} onChange={this.handleChange} />
					<Button className="btn_submit" eventOnClick={(e)=>{addElement(e, newUser); clearUser(e); hideModal()}} buttonName="Add to list"/>

				</form>
			</div>

		)
	}
}

export default Form;