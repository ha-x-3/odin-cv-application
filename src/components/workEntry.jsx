import React from 'react'
import '../styles/workStyles.css';

export default function WorkEntry({ work, onChange }) {
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
              onChange={(e) => onChange('responsibilities', e.target.value)}
              placeholder='Worked on various projects and technologies'
              rows='10'
              cols='34'
              ></textarea>
        </label>
        <label>
          Start Year:
          <input
            type='number'
            name='startYear'
            value={work.startYear}
            onChange={(e) => onChange('startYear', e.target.value)}
            placeholder='2018'
          />
        </label>
        <label>
          End Year:
          <input
            type='number'
            name='endYear'
            value={work.endYear}
            onChange={(e) => onChange('endYear', e.target.value)}
            placeholder='Present'
            disabled={work.startYear === work.endYear}
            />
        </label>
    </div>
  );
}
