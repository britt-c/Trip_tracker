import React from 'react'

function LocationForm(props) {
	return (
	<div>
	<span className="icon">	🛫</span><input type="text" placeholder="City, State" defaultValue={props.title}/><br />
	<span className="icon">	🛬</span><input type="text" placeholder="City, State"/><br />
	<span className="icon">	🗽</span><input type="text" placeholder="DestinationLandmark"/><br />  
	</div>
	)}

export default LocationForm
