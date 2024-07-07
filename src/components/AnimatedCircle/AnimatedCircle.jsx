import React from 'react';
import './style.css';

const colors = ['red', 'green', 'yellow', 'blue', 'orange'];

export const AnimatedCircle = () => {
	const [circles, setCircles] = React.useState([]);

	const [resetFunctionality, setResetFunctionality] = React.useState({
		undo: [],
	});

	const handleClick = (event) => {
		setCircles((prevData) => [
			...prevData,
			{
				x: event.clientX,
				y: event.clientY,
				id: +new Date(),
				color: colors[Math.floor(Math.random() * colors.length)],
			},
		]);
	};

	const handleReset = (itemName) => {
		const lastItem = circles[circles.length - 1];
		const firstItem =
			resetFunctionality?.undo?.[resetFunctionality?.undo?.length - 1];
		switch (itemName) {
			case 'Undo':
				setCircles((prevCircle) =>
					prevCircle.filter((ele) => ele.id !== lastItem.id)
				);
				setResetFunctionality((prevData) => ({
					...prevData,
					undo: [...prevData.undo, lastItem],
				}));

				break;
			case 'Redo':
				setCircles((prevCircle) => [...prevCircle, firstItem]);

				setResetFunctionality((prevData) => ({
					...prevData,
					undo: prevData.undo.filter((ele) => ele.id !== firstItem.id),
				}));
				break;

			default:
				return null;
		}
	};
	return (
		<>
			<div className="button-layout">
				{['Undo', 'Redo', 'Reset'].map((item, index) => (
					<button onClick={() => handleReset(item)} key={index}>
						{item}
					</button>
				))}
			</div>
			<div className="main-container" onClick={handleClick}>
				{circles.map((item) => (
					<div
						key={item.id}
						className="circle"
						style={{
							backgroundColor: item.color,
							top: item.y,
							left: item.x,
							position: 'absolute',
						}}
					></div>
				))}
			</div>
		</>
	);
};
