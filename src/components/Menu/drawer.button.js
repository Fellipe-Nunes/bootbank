import React from 'react'
import '../../assets/css/drawer.button.css'

const DrawerButton = props => (
	<button className="toggle-button" onClick={props.click}>
		<div className="toggle-button__line" />
		<div className="toggle-button__line" />
		<div className="toggle-button__line" />
	</button>
);

export default DrawerButton