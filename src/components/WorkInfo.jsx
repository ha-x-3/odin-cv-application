import React from 'react'
import WorkEntry from './workEntry.jsx';

export default function WorkInfo({ workInfo, setWorkInfo }) {
  const addWork = () => {
    setWorkInfo([
      ...workInfo, 
      { company: '', position: '', responsibilities: '', startYear: '', endYear: '' }
    ]);
  };

  const updateWork = (index, field, value) => {
    const newWorkInfo = [...workInfo];
    newWorkInfo[index][field] = value;
    setWorkInfo(newWorkInfo);
  };

  return (
    <div className='workInfo main'>
      <h2>Work Experience</h2>
      {workInfo.map((work, index) => (
        <WorkEntry
          key={index}
          work={work}
          onChange={(field, value) => updateWork(index, field, value)}
        />
      ))}
      <button onClick={addWork}>+ Add Job</button>
    </div>
  );
}
