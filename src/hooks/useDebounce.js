import React from 'react';
export const useDebounce = (value, delay) => {
	const [debouncedValue, setDebouncedValue] = React.useState('');

	React.useEffect(() => {
		let timer;
		timer = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => {
			clearTimeout(timer);
		};
	}, [delay, value]);

	return debouncedValue;
};
