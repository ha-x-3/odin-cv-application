import React from 'react'
import '../styles/workStyles.css';

export default function WorkEntry({ work, onChange }) {
    const handlePresentChange = () => {
		onChange('isPresent', !work.isPresent);
		onChange('endYear', work.isPresent ? '' : ''); // Clear endYear if switching to Present
	};

    return (
		<div className='workEntry'>
			<label>
				Company:
				<input
					type='text'
					name='company'
					value={work.company}
					onChange={(e) => onChange('company', e.target.value)}
					placeholder='Google'
				/>
			</label>
			<label>
				Position:
				<input
					type='text'
					name='position'
					value={work.position}
					onChange={(e) => onChange('position', e.target.value)}
					placeholder='Software Engineer'
				/>
			</label>
			<label>
				Responsibilities:
				<textarea
					name='responsibilities'
					value={work.responsibilities}
					onChange={(e) =>
						onChange('responsibilities', e.target.value)
					}
					placeholder='Worked on various projects and technologies'
					rows='10'
					cols='34'
				></textarea>
			</label>
			<label>
				Start Year:
				<input
					type='month'
					name='startYear'
					value={work.startYear}
					onChange={(e) => onChange('startYear', e.target.value)}
				/>
			</label>
			<label>
				<input
					type='checkbox'
					checked={work.isPresent}
					onChange={handlePresentChange}
					className='checkbox'
				/>
				Present
			</label>
			{!work.isPresent && (
				<label>
					End Year:
					<input
						type='month'
						name='endYear'
						value={work.endYear}
						onChange={(e) => onChange('endYear', e.target.value)}
					/>
				</label>
			)}
		</div>
	);
}
