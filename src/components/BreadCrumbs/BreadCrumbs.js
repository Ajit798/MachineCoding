import React from 'react';

import { Link, useLocation } from 'react-router-dom';
export default function BreadCrumbs() {
	const location = useLocation();
	const pathNames = location.pathname.split('/').filter((x) => x);
	let breadCrumbPath = '';
	return (
		<div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
			<Link to="/">Home</Link>
			{pathNames.map((path, pathIndex) => {
				breadCrumbPath += `/${path}`;
				console.log(breadCrumbPath);
				return pathIndex === pathNames.length - 1 ? (
					<p>{path}</p>
				) : (
					<Link to={breadCrumbPath}>{path}</Link>
				);
			})}
		</div>
	);
}
