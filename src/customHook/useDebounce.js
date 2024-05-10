import React from 'react';
export const useDebounce = (value, delay) => {
	const [debounceValue, setDebounceValue] = React.useState(null);

	React.useEffect(() => {
		let timer;
		timer = setTimeout(() => {
			setDebounceValue(value);
		}, delay);

		return () => {
			clearTimeout(timer);
		};
	}, [delay, value]);

	return debounceValue;
};
