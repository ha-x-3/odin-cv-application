import React from 'react';
import '../styles/previewStyles.css';

export default function Preview({ generalInfo, educationInfo, workInfo }) {
	return (
		<div className='preview'>
			<div className='intro'>
				<h1>{generalInfo.name || "Full Name"}</h1>
				<p>{generalInfo.email || "Email"}</p>
				<p>{generalInfo.phoneNumber || "Phone"}</p>
			</div>

			<h2>Education</h2>
			{educationInfo.map((edu, index) => (
				<div key={index}>
					<p>Degree: {edu.degree}</p>
					<p>Institution: {edu.institution}</p>
					<p>Graduation Year: {edu.graduationYear}</p>
				</div>
			))}

			<h2>Work Experience</h2>
			{workInfo.map((work, index) => (
                <div key={index}>
				    <p>Company: {work.company}</p>
					<p>Position: {work.position}</p>
					<p>Responsibilities: {work.responsibilities}</p>
					<p>Start Year: {work.startYear}</p>
					<p>End Year: {work.endYear}</p>
					</div>
			))}
		</div>
	);
}
