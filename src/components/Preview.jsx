import React, { forwardRef } from 'react';
import '../styles/previewStyles.css';

const Preview = forwardRef(({ generalInfo, summary, educationInfo, workInfo }, ref) => {
	return (
		<div
			className='preview'
			ref={ref}
		>
			<div className='intro'>
				<h1>{generalInfo.name || 'Full Name'}</h1>
				<p>{generalInfo.email || 'Email'}</p>
				<p>{generalInfo.phoneNumber || 'Phone'}</p>
			</div>

			<h2>Summary</h2>
			<p>{summary || 'Write a brief summary'}</p>

			<h2>Education</h2>
			{educationInfo.map((edu, index) => (
				<div key={index} className='entry educationRow'>
					<p>{edu.degree || 'Degree'}</p>
					<p>{edu.fieldOfStudy || 'Field of Study'}</p>
					<p>{edu.institution || 'Institution'}</p>
					<p>{edu.graduationYear || 'Graduation Year'}</p>
				</div>
			))}

			<h2>Work Experience</h2>
			{workInfo.map((work, index) => (
				<div key={index} className='entry'>
					<p>{work.company || 'Company'}</p>
					<p>{work.position || 'Position'}</p>
					<p>{work.responsibilities || 'Responsibilities'}</p>
					<p>{work.startYear || 'Start Year'} - { work.isPresent ? "Present" : "End Year" + work.endYear}</p>
				</div>
			))}
		</div>
	);
});

export default Preview;
