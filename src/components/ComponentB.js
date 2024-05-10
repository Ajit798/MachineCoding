import React from 'react';

export default function ComponentB({ children, ...rest }) {
	const [count, setCount] = React.useState(0);

	const handleClick = () => {
		setCount(count + 1);
	};

	return (
		<div>
			<button onClick={handleClick}>Click me</button>
			<h2>{count}</h2>
			{children}
		</div>
	);
}
