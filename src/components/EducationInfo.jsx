import React from 'react'

export default function EducationInfo({ educationInfo, setEducationInfo  }) {
    const handleChange = (e) => {
      const { name, value } = e.target;
      setEducationInfo((prev) => ({...prev, [name]: value }));
    };

    return (
        <div className='educationInfo main'>
            <label>
                Degree:
                <input
                    type='text'
                    name='degree'
                    value={educationInfo.degree}
                    onChange={handleChange}
                    placeholder='Bachelor of Science'
                />
            </label>
            <label>
                Institution:
                <input
                    type='text'
                    name='institution'
                    value={educationInfo.institution}
                    onChange={handleChange}
                    placeholder='University of Example'
                />
            </label>
            <label>
                Graduation Year:
                <input
                    type='number'
                    name='graduationYear'
                    value={educationInfo.graduationYear}
                    onChange={handleChange}
                    placeholder='2020'
                />
            </label>
        </div>
    )
}
