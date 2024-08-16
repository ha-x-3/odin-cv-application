import React from 'react';

export default function Preview({ generalInfo, educationInfo, workInfo }) {
	return (
		<div className='preview'>
			<h2>General Information</h2>
			<p>Name: {generalInfo.name}</p>
			<p>Email: {generalInfo.email}</p>
			<p>Phone: {generalInfo.phoneNumber}</p>

			<h2>Education</h2>
            <p>Degree: {educationInfo.degree}</p>
            <p>Institution: {educationInfo.institution}</p>
            <p>Graduation Year: {educationInfo.graduationYear}</p>
		</div>
	);
}
