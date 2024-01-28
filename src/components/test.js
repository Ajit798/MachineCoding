import React from 'react';

export default function Test({ as: Icon, children, ...props }) {
	const [count, setCount] = React.useState(0);
	return (
		<>
			<Icon {...props}>{children}</Icon>
			<h2>{count}</h2>
			<button onClick={() => setCount(count + 1)}>Click me</button>
		</>
	);
}
