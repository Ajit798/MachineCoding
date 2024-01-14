import React from 'react';

export default function Form2({ handleChange, handleNext, handlePrev, form }) {
	return (
		<div
			style={{
				alignItems: 'center',
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<h2>Form2</h2>
			<input
				value={form.address}
				name="address"
				type="text"
				onChange={handleChange}
			/>
			<input
				value={form.phoneNo}
				name="phoneNo"
				type="text"
				onChange={handleChange}
			/>
			<div>
				<button onClick={handlePrev}>Prev</button>
				<button onClick={handleNext}>Next</button>
			</div>
		</div>
	);
}
