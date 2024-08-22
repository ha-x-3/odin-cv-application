import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';
import Preview from './preview.jsx';

const PdfExporter = ({ generalInfo, summary, educationInfo, workInfo }) => {
	const previewRef = useRef();

	const handleDownload = () => {
		const element = previewRef.current;
		html2pdf().from(element).save('resume.pdf');
	};

	return (
		<div>
			<div ref={previewRef}>
				<Preview
					generalInfo={generalInfo}
					summary={summary}
					educationInfo={educationInfo}
					workInfo={workInfo}
				/>
			</div>
			<button onClick={handleDownload}>Download PDF</button>
		</div>
	);
};

export default PdfExporter;
