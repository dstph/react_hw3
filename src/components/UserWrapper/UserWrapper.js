import React from 'react';
import User from '../User/User';
import { users } from '../users';
import './UserWrapper.css'
import Button from '../Button/Button';
import Form from '../Form/Form';

class UserWrapper extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			userItems: users,
			isShown: false

		}
	
		this.removeElement = this.removeElement.bind(this);
		this.addElement = this.addElement.bind(this);

		
	}

	removeElement(index) {
		users.splice(index, 1);
		this.setState({ userItems: users })
	}

	addElement (e, newUser) {
		e.preventDefault();
		users.push(newUser);
		this.setState({ userItems: users });
	}
	showModal = () => {
		this.setState({ isShown: true });

	};

	hideModal = () => {
		this.setState({ isShown: false });
	};
	
	render(){
		const { userItems, isShown } = this.state;
		return(
			<React.Fragment>
				<div className="container-grid">
					{ userItems.map((props, index) => (
						<User {...props} key={props.email? props.email : index} removeElement={this.removeElement} currentIndex={index}  />
					))}
				</div>
			<Button className="showModal" eventOnClick={this.showModal} buttonName="Add user"/>
			<Form addElement={this.addElement} isShown={isShown} hideModal={this.hideModal} />
			</React.Fragment>
		)
	}
	
}



export default UserWrapper;
