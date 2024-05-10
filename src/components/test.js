import React from 'react';
import { useThrottle } from '../hooks/useThrottle';
import { useDebounce } from '../hooks/useDebounce';

export default function Test({ as: Icon, children, ...props }) {
	// const throttle = useThrottle(handleButtonClick, 3000);
	const [value, setValue] = React.useState('');
	const debouncedValue = useDebounce(value, 2000);

	React.useEffect(() => {
		console.log(debouncedValue);
	}, [debouncedValue]);

	function handleButtonClick(e) {
		setValue(e.target.value);
	}
	return (
		<>
			{/* <button onClick={throttle}>Click me</button> */}
			<input type="text" name="search" onChange={handleButtonClick} />
		</>
	);
}
