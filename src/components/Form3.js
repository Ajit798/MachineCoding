import React from 'react';

export default function Form3({ handleChange, handlePrev, form }) {
	return (
		<div
			style={{
				alignItems: 'center',
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<h2>Form3</h2>
			<input
				value={form.degree}
				name="degree"
				type="text"
				onChange={handleChange}
			/>
			<input
				value={form.field}
				name="field"
				type="text"
				onChange={handleChange}
			/>
			<div>
				<button onClick={handlePrev}>Prev</button>
				<button>Submit</button>
			</div>
		</div>
	);
}
