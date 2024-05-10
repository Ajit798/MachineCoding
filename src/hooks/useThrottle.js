import React, { useCallback } from 'react';

export const useThrottle = (cb, delay) => {
	const ref = React.useRef(true);
	const throttle = () => {
		ref.current = false;
		if (!ref.current) {
			setTimeout(() => {
				cb();
				ref.current = true;
			}, delay);
		}
	};

	return throttle;
};
