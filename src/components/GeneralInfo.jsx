import React from 'react';

export default function GeneralInfo({ generalInfo, setGeneralInfo }) {
	const handleChange = (e) => {
		const { name, value } = e.target;
		setGeneralInfo((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<div className='generalInfo main'>
			<label>
				Full Name:
				<input
					type='text'
					name='name'
					value={generalInfo.name}
					onChange={handleChange}
					placeholder='Jane Doe'
				/>
			</label>
			<label>
				Title:
				<input
                    type='text'
                    name='title'
                    value={generalInfo.title}
                    onChange={handleChange}
					placeholder='Software Engineer'
				/>
			</label>
			<label>
				Location:
                <input
                    type='text'
                    name='location'
                    value={generalInfo.location}
                    onChange={handleChange}
                    placeholder='New York, NY'
                />
			</label>
			<label>
				Email:
				<input
					type='email'
					name='email'
					value={generalInfo.email}
					onChange={handleChange}
					placeholder='janeDoe@email.com'
				/>
			</label>
			<label>
				Phone Number:
				<input
					type='tel'
					name='phoneNumber'
					value={generalInfo.phoneNumber}
					onChange={handleChange}
					placeholder='333-333-4444'
					pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
				/>
			</label>
		</div>
	);
}
