import React, { useState } from 'react';
import './App.css';
import EducationInfo from './components/educationInfo.jsx';
import GeneralInfo from './components/generalInfo.jsx';
import Preview from './components/preview.jsx';
import WorkInfo from './components/workInfo.jsx';

function App() {
	const [generalInfo, setGeneralInfo] = useState({
		name: '',
		email: '',
		phoneNumber: '',
	});
	const [educationInfo, setEducationInfo] = useState([
		{
			degree: '',
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
		}
	]);

	return (
		<div className='app'>
			<div className='leftSide'>
				<GeneralInfo
					generalInfo={generalInfo}
					setGeneralInfo={setGeneralInfo}
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
				<Preview
					generalInfo={generalInfo}
					educationInfo={educationInfo}
					workInfo={workInfo}
				/>
			</div>
		</div>
	);
}

export default App;
