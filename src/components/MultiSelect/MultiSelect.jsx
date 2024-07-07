import React, { useRef } from 'react';
import './multiselect.css';
import { multiSelectData } from './multiselectData';
import { Chip } from './Chip';

export const MultiSelect = () => {
	const [gridItems, setGridItems] = React.useState([]);
	const [multiData, setMultiData] = React.useState(multiSelectData);
	const [isOptionsTabVisible, setIsOptionsTabVisible] = React.useState(false);
	const inputRef = useRef(null);

	const handleClick = (item) => {
		setGridItems([...gridItems, item]);
		setMultiData((prevData) =>
			prevData.filter((data) => data.name !== item.name)
		);
		inputRef.current.focus();
	};

	const handleIconClick = (event, item) => {
		event.stopPropagation();
		setGridItems((gridItems) =>
			gridItems.filter((grid) => grid.name !== item.name)
		);
		setMultiData((prevData) => [...prevData, item].sort((a, b) => a.id - b.id));
		inputRef.current.focus();
	};

	const handleSearch = (event) => {
		const { value } = event.target;
		if (!value)
			setMultiData(
				multiSelectData.filter(
					(item) => gridItems.findIndex((ele) => ele.name === item.name) === -1
				)
			);
		else
			setMultiData(() =>
				multiSelectData.filter((item) =>
					item.name.toLowerCase().includes(value.toLowerCase())
				)
			);
	};

	return (
		<div className="main-container">
			<div
				className="input-container"
				onClick={() => {
					if (!isOptionsTabVisible) {
						inputRef.current.focus();
					}
					setIsOptionsTabVisible(!isOptionsTabVisible);
				}}
			>
				<div className="chips">
					{gridItems.map((item, ind) => (
						<Chip
							key={ind}
							name={item.name}
							handleIconClick={(event) => handleIconClick(event, item)}
						/>
					))}
					<div>
						<input
							ref={inputRef}
							placeholder="Select..."
							name="multi-select"
							onChange={handleSearch}
						/>
					</div>
				</div>
			</div>
			{isOptionsTabVisible ? (
				<div className="items-container">
					{multiData.map((item) => (
						<div
							onClick={() => handleClick(item)}
							className="items"
							key={item.id}
						>
							{item.name}
						</div>
					))}
				</div>
			) : null}
		</div>
	);
};
