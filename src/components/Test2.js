import React from 'react';
import ComponentB from './ComponentB';

function Child() {
	console.log('rendered');
	return <h2>Hello</h2>;
}

export function Test2() {
	return <ComponentB children={<Child />} />;
}
