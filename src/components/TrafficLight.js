import React from 'react';

const lights = [
	{ name: 'green', delay: 1000, isActive: false },
	{ name: 'yellow', delay: 3000, isActive: false },
	{ name: 'red', delay: 5000, isActive: false },
];
const color = {
	green: 'green',
	yellow: 'yellow',
	red: 'red',
};
function TrafficLight() {
	const [lightsData, setLightsData] = React.useState(lights);
	const [count, setCount] = React.useState(0);

	React.useEffect(() => {
		let id;

		const delay = lightsData.find((_, ind) => ind === count)?.delay;

		if (count < lightsData.length) {
			id = setInterval(() => {
				const updated = lightsData.map((ele, ind) =>
					ind === count
						? { ...ele, isActive: true }
						: { ...ele, isActive: false }
				);
				setLightsData(updated);
				setCount((count) => count + 1);
			}, delay);
		} else {
			setCount(0);
		}

		return () => {
			clearInterval(id);
		};
	}, [lightsData, count]);

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				marginTop: '50px',
				gap: '20px',
			}}
		>
			{lightsData.map((ele) => {
				return (
					<div
						style={{
							width: '50px',
							height: '50px',
							border: '1px solid black',
							borderRadius: '50%',
							backgroundColor: ele.isActive ? color[ele.name] : '',
						}}
						key={ele.name}
					/>
				);
			})}
		</div>
	);
}

export default TrafficLight;
