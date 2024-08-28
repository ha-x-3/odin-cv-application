import React, { forwardRef, useEffect, useState } from 'react';
import '../styles/previewStyles.css';

const Preview = forwardRef(
	({ generalInfo, summary, educationInfo, workInfo }, ref) => {
		const [pageBreaks, setPageBreaks] = useState([]);

		useEffect(() => {
			const updatePageBreaks = () => {
				const previewContent = ref.current;
				if (previewContent) {
					const contentHeight = previewContent.scrollHeight;
					const pageHeight = 297 * 3.7795275591; // Convert 297mm to pixels (assuming 96 DPI)
					const breaks = [];
					for (let i = 1; i * pageHeight < contentHeight; i++) {
						breaks.push(i * pageHeight);
					}
					setPageBreaks(breaks);
				}
			};

			updatePageBreaks();
			window.addEventListener('resize', updatePageBreaks);
			return () => window.removeEventListener('resize', updatePageBreaks);
		}, [ref, generalInfo, summary, educationInfo, workInfo]);

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

					<h2 className='previewHeading'>Summary</h2>
					<p>{summary || 'Write a brief summary'}</p>

					<h2 className='previewHeading'>Education</h2>
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

					<h2 className='previewHeading'>Work Experience</h2>
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
				{pageBreaks.map((breakPoint, index) => (
					<div
						key={index}
						className='page-break-indicator'
						style={{ top: `${breakPoint}px` }}
					>
						Page {index + 2}
					</div>
				))}
			</div>
		);
	}
);

export default Preview;
