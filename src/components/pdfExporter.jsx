import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';
import Preview from './preview.jsx';

const PdfExporter = ({ generalInfo, summary, educationInfo, workInfo }) => {
	const previewRef = useRef();

	const handleDownload = () => {
		const element = previewRef.current;

		const opt = {
			margin: 0,
			filename: 'resume.pdf',
			image: { type: 'jpeg', quality: 0.98 },
			html2canvas: { scale: 2, useCORS: true, letterRendering: true },
			jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
		};

		html2pdf().from(element).set(opt).save();
	};

	return (
		<div>
			<Preview
				ref={previewRef}
				generalInfo={generalInfo}
				summary={summary}
				educationInfo={educationInfo}
				workInfo={workInfo}
			/>
			<button onClick={handleDownload}>Download PDF</button>
		</div>
	);
};

export default PdfExporter;
