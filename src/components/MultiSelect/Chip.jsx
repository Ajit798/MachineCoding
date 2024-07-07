import React from 'react';
import './multiselect.css';
import png from './icons8-wrong-50.png';

export const Chip = ({ name, handleIconClick }) => {
	return (
		<div className="chip-container">
			<p>{name}</p>
			<img
				src={png}
				alt="A cross mark to remove the chip"
				height="20px"
				width="20px"
				onClick={handleIconClick}
			/>
		</div>
	);
};
