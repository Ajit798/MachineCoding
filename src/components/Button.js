import React from 'react';

export default function Button({ title, ...props }) {
	console.log('rerendered');
	return <button {...props}>{title}</button>;
}
