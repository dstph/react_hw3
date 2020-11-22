import React from 'react';
import './user.css';
import Button from '../Button/Button';

class User extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		const {name, username, email, address = "-", phone, website, company = "-", removeElement, currentIndex} = this.props;
		const {street, suite, city, zipcode} = address;
		const {name:companyName, catchPhrase, bs} = company;
		return(
			<div className="card">
				
				<span>name : { name ? name : "-" }</span>
				<span>username : { username ? username : "-" }</span>
				<span>email : { email ? email : "-" }</span>
				<span>phone : { phone ? phone : "-" }</span>
				{address !== "-" &&
				<div>
					<span>Adress : </span>
					<span>street : { street }</span>
					<span>suite : { suite }</span>
					<span>city : { city }</span>
					<span>zipcode: { zipcode }</span>
				</div>
				}
				<span>website : { website ? website : "-" }</span>
				{company !== "-" &&
				<div>
					<span>Company : </span>
					<span>name : { companyName }</span>
					<span>catch phtase : { catchPhrase }</span>
					<span>bs : { bs }</span>
				</div>
				}
				<Button className="delete_user" eventOnClick={() => removeElement(currentIndex)} buttonName="Delete"/>

			</div>
		)
	}
}

export default User;
