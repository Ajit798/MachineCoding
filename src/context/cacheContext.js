import React, { useCallback } from 'react';

export const CacheContext = React.createContext({
	setCacheData: () => {},
	cachedData: {},
});

export const CacheProvider = ({ children }) => {
	const [cachedData, setCachedData] = React.useState({});

	const setCacheData = useCallback(
		(key, value) => {
			setCachedData({ ...cachedData, [key]: value });
		},
		[cachedData]
	);
	return (
		<CacheContext.Provider value={{ setCacheData, cachedData }}>
			{children}
		</CacheContext.Provider>
	);
};
