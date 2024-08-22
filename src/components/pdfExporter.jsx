import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';
import Preview from './preview.jsx';

const PdfExporter = ({ generalInfo, summary, educationInfo, workInfo }) => {
	const previewRef = useRef();

	const handleDownload = () => {
		const element = previewRef.current;

		const opt = {
			margin: 0.1,
			filename: 'resume.pdf',
			image: { type: 'jpeg', quality: 0.98 },
			html2canvas: { scale: 2, useCORS: true },
			jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
		};

		html2pdf().from(element).set(opt).save();
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
