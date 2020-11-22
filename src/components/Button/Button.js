import React from 'react';

class Button extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		const {className, eventOnClick, buttonName} = this.props;
		return <button className = {className} onClick = {eventOnClick} >{buttonName}</button>
	}
}

export default Button;