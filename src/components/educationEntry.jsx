import React from 'react';
import '../styles/educationStyles.css';

export default function EducationEntry({ education, onChange }) {
	return (
		<div className='educationEntry'>
			<label>
				Degree:
				<input
					type='text'
					name='degree'
					value={education.degree}
					onChange={(e) => onChange('degree', e.target.value)}
					placeholder='Bachelor of Science'
				/>
			</label>
			<label>
				Institution:
				<input
					type='text'
					name='institution'
					value={education.institution}
					onChange={(e) => onChange('institution', e.target.value)}
					placeholder='University of Example'
				/>
			</label>
			<label>
				Graduation Year:
				<input
					type='number'
					name='graduationYear'
					value={education.graduationYear}
					onChange={(e) => onChange('graduationYear', e.target.value)}
					placeholder='2020'
				/>
			</label>
		</div>
	);
}
