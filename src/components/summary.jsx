import React from 'react';

export default function Summary({ summary, setSummary }) {

    const handleSummaryChange = (e) => {
		setSummary(e.target.value);
	};

	return (
		<div className='summary main'>
			<h2>Summary</h2>
			<textarea
				name='summary'
				rows='10'
				cols='34'
				placeholder='Write a brief summary'
                value={summary}
                onChange={handleSummaryChange}
			></textarea>
		</div>
	);
}
