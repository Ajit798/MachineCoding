import React from 'react';

export default function StarRating() {
	const [rating, setRating] = React.useState(-1);
	const [hoveredRating, setHoveredRating] = React.useState(-1);
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				gap: '20px',
			}}
		>
			{Array.from({ length: 5 }).map((_, ind) => {
				return (
					<div
						style={{
							width: '200px',
							height: '30px',
							border: '1px solid black',
						}}
						key={ind}
						onClick={() => setRating(ind)}
						className={`${ind <= rating || ind <= hoveredRating ? 'star' : ''}`}
						onMouseEnter={() => {
							setHoveredRating(ind);
						}}
						onMouseLeave={() => setHoveredRating(-1)}
					/>
				);
			})}
		</div>
	);
}
