import React from 'react'
import EducationEntry from './educationEntry.jsx';

export default function EducationInfo({ educationInfo, setEducationInfo  }) {
	const addEducation = () => {
		setEducationInfo([
			...educationInfo,
			{ degree: '', institution: '', graduationYear: '' },
		]);
	};

	const updateEducation = (index, field, value) => {
		const newEducationInfo = [...educationInfo];
		newEducationInfo[index][field] = value;
		setEducationInfo(newEducationInfo);
	};

	return (
		<div className='educationInfo main'>
            <h2>Education</h2>
			{educationInfo.map((edu, index) => (
				<EducationEntry
					key={index}
					education={edu}
					onChange={(field, value) =>
						updateEducation(index, field, value)
					}
				/>
			))}
			<button onClick={addEducation}>+ Add Degree</button>
		</div>
	);
}
