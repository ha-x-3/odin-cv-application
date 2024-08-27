import React, { forwardRef } from 'react';
import '../styles/previewStyles.css';

const Preview = forwardRef(
	({ generalInfo, summary, educationInfo, workInfo }, ref) => {
		return (
			<div
				ref={ref}
				className='preview-container'
			>
				<div className='preview-content'>
					<div className='intro'>
						<div>
							<h1>{generalInfo.name || 'Full Name'}</h1>
							<h3>{generalInfo.title || 'Title'}</h3>
						</div>
						<div className='introRight'>
							<p>
								<i className='fa-solid fa-map-marker-alt'></i>
								{generalInfo.location || 'Location'}
							</p>
							<p>
								<i className='fa-solid fa-envelope'></i>
								{generalInfo.email || 'Email'}
							</p>
							<p>
								<i className='fa-solid fa-phone'></i>
								{generalInfo.phoneNumber || 'Phone'}
							</p>
						</div>
					</div>

					<h2>Summary</h2>
					<p>{summary || 'Write a brief summary'}</p>

					<h2>Education</h2>
					{educationInfo.map((edu, index) => (
						<div
							key={index}
							className='entry educationRow'
						>
							<p>{edu.degree || 'Degree'}</p>
							<p>{edu.fieldOfStudy || 'Field of Study'}</p>
							<p>{edu.institution || 'Institution'}</p>
							<p>{edu.graduationYear || 'Graduation Year'}</p>
						</div>
					))}

					<h2>Work Experience</h2>
					{workInfo.map((work, index) => (
						<div
							key={index}
							className='entry'
						>
							<p>{work.company || 'Company'}</p>
							<p>{work.position || 'Position'}</p>
							<p>{work.responsibilities || 'Responsibilities'}</p>
							<p>
								{work.startYear || 'Start Year'} -{' '}
								{work.isPresent
									? 'Present'
									: work.endYear || 'End Year'}
							</p>
						</div>
					))}
				</div>
			</div>
		);
	}
);

export default Preview;
