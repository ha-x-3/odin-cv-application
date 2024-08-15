import React from 'react';

export default function Preview({ generalInfo, educationInfo, workInfo }) {
	return (
		<div className='preview'>
			<h2>General Information</h2>
			<p>Name: {generalInfo.name}</p>
			<p>Email: {generalInfo.email}</p>
			<p>Phone: {generalInfo.phoneNumber}</p>

			
		</div>
	);
}
