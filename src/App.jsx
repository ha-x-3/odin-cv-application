import React, { useState } from 'react';
import './App.css';
import EducationInfo from './components/educationInfo.jsx';
import GeneralInfo from './components/generalInfo.jsx';
import Summary from './components/summary.jsx';
import WorkInfo from './components/workInfo.jsx';
import PdfExporter from './components/pdfExporter.jsx';

function App() {
	const [generalInfo, setGeneralInfo] = useState({
		name: '',
		email: '',
		phoneNumber: '',
	});
	const [summary, setSummary] = useState('');
	const [educationInfo, setEducationInfo] = useState([
		{
			degree: '',
			fieldOfStudy: '',
			institution: '',
			graduationYear: '',
		}
	]);
	const [workInfo, setWorkInfo] = useState([
		{
			company: '',
			position: '',
			responsibilities: '',
			startYear: '',
			endYear: '',
			isPresent: false,
		},
	]);

	return (
		<div className='app'>
			<div className='leftSide'>
				<GeneralInfo
					generalInfo={generalInfo}
					setGeneralInfo={setGeneralInfo}
				/>
				<Summary
                    summary={summary}
                    setSummary={setSummary}
                />
				<EducationInfo
					educationInfo={educationInfo}
					setEducationInfo={setEducationInfo}
				/>
				<WorkInfo
					workInfo={workInfo}
					setWorkInfo={setWorkInfo}
				/>
			</div>
			<div className='rightSide'>
				<PdfExporter
					generalInfo={generalInfo}
					educationInfo={educationInfo}
					workInfo={workInfo}
				/>
			</div>
		</div>
	);
}

export default App;
