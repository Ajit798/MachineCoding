import React from 'react';

export const Button = ({ title, onClickHandler }) => {
	return <button onClick={onClickHandler}>{title}</button>;
};
