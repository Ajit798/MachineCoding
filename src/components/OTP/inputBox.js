import React, { forwardRef } from 'react';

function InputBox({ otp, handleChange, handleKeyDown }, ref) {
	return Array.from({ length: 4 }).map((_, ind) => {
		return (
			<input
				type="number"
				name={`otp${ind}`}
				value={otp?.find((ele) => ele.id === `otp${ind}`)?.value ?? ''}
				key={ind}
				style={{
					width: '70px',
					height: '30px',
					border: '1px solid black',
				}}
				ref={(input) => (ref.current[ind] = input)}
				onChange={(event) => handleChange(ind, event)}
				onKeyDown={(event) => handleKeyDown(event, ind)}
			/>
		);
	});
}
export default forwardRef(InputBox);
