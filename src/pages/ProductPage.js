import React from 'react';
import { useDebounce } from '../customHook/useDebounce';
import { CacheContext } from '../context/cacheContext';

export const ProductPage = () => {
	const [products, setProducts] = React.useState([]);
	const [searchItem, setSearchItem] = React.useState('');
	const value = useDebounce(searchItem, 1000);
	const cache = React.useContext(CacheContext);

	React.useEffect(() => {
		if (value) {
			if (cache.cachedData[value]) {
				setProducts(cache.cachedData[value]);
			} else {
				fetchData(value);
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [cache.cachedData, products, value]);

	const fetchData = async (searchItem) => {
		const response = await fetch(
			`https://dummyjson.com/products/search?q=${searchItem}`
		);
		const data = await response.json();

		setProducts(...data.products);
		cache.setCacheData(value, data.products);
	};
	return (
		<input
			type="text"
			onChange={(event) => {
				setSearchItem(event.target.value);
			}}
		/>
	);
};
