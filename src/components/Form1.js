import React from 'react';

export default function Form1({ handleChange, handleNext, form }) {
	return (
		<div
			style={{
				alignItems: 'center',
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<h2>Form1</h2>
			<input
				value={form.name}
				name="name"
				type="text"
				onChange={handleChange}
			/>
			<input
				value={form.email}
				name="email"
				type="text"
				onChange={handleChange}
			/>
			<button onClick={handleNext}>Next</button>
		</div>
	);
}
