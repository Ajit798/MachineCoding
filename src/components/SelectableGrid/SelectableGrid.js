import React, { useCallback } from 'react';

export default function SelectableGrid() {
	const [dataGrid, setDataGrid] = React.useState([]);
	const [start, setStart] = React.useState([]);
	const [end, setEnd] = React.useState([]);

	React.useEffect(() => {
		getGridData();
	}, []);

	React.useEffect(() => {
		if (start.length > 1 && end.length > 1) {
			fillColor(start, end);
		}
	}, [start, end]);

	const fillColor = useCallback(
		(start, end) => {
			const ss = [];
			for (let i = start[0]; i <= end[0]; i++) {
				for (let j = start[1]; j <= end[1]; j++) {
					ss.push([i, j]);
				}
			}

			const updatedSelectableData = [...dataGrid].map((item) => {
				if (ss.find((ele) => ele.join('') === item.pos.join(''))) {
					return {
						...item,
						isSelectable: true,
					};
				} else {
					return item;
				}
			});

			setDataGrid(updatedSelectableData);
		},
		[dataGrid]
	);

	const getGridData = () => {
		let result = [];

		for (let i = 0; i < 10; i++) {
			for (let j = 0; j < 10; j++) {
				result.push({ pos: [i, j], isSelectable: false });
			}
		}
		setDataGrid(result);
	};

	return (
		<div
			style={{
				display: 'flex',

				width: '16%',
				flexWrap: 'wrap',
				justifyContent: 'center',
				alignItems: 'center',
				gap: '1px',
				margin: '50px',
			}}
		>
			{dataGrid.map((ele, ind) => {
				return (
					<div
						key={ind}
						style={{
							height: '20px',
							width: '20px',
							border: '1px solid black',
							cursor: 'pointer',
							backgroundColor: ele.isSelectable ? 'blue' : '',
							color: ele.isSelectable ? 'white' : 'black',
						}}
						draggable
						onDrag={async () => {
							getGridData();

							setStart(ele.pos);
						}}
						onDragOver={(event) => {
							event.preventDefault();
							setEnd(ele.pos);
						}}
					>
						{ele.pos.join('')}
					</div>
				);
			})}
		</div>
	);
}
