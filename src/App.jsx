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
		title: '',
		location: '',
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
			position: '',
			company: '',
			responsibilities: '',
			startYear: '',
			endYear: '',
			isPresent: false,
		},
	]);

	return (
		<div className='app'>
			<div className='leftSide'>
			    <div className='header'>
                    <h1>Resume Builder</h1>
                    <p>Create, edit, and download your PDF resume with ease.</p>
                </div>
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
					summary={summary}
					educationInfo={educationInfo}
					workInfo={workInfo}
				/>
			</div>
		</div>
	);
}

export default App;
