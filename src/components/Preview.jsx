import React from 'react';

export default function Preview({ generalInfo, educationInfo, workInfo }) {
	return (
		<div className='preview'>
			<h2>General Information</h2>
			<p>Name: {generalInfo.name}</p>
			<p>Email: {generalInfo.email}</p>
			<p>Phone: {generalInfo.phoneNumber}</p>

			<h2>Education</h2>
			{educationInfo.map((edu, index) => (
				<div key={index}>
					<p>Degree: {edu.degree}</p>
					<p>Institution: {edu.institution}</p>
					<p>Graduation Year: {edu.graduationYear}</p>
				</div>
			))}
		</div>
	);
}
