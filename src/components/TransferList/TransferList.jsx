import React, { useReducer, useState } from 'react';
import './index.css';
import { TransferBox } from './TransferBox';
import { transferListReducer } from './reducers';
import { ACTIONS, initialState } from './utils/constants';
import { Button } from './Button';

export const TransferList = () => {
	const [listState, dispatch] = useReducer(transferListReducer, initialState);
	const [selectedItems, setSelectedItems] = useState({
		leftBoxSelectedItems: [],
		rightBoxSelectedItems: [],
	});

	const handleClick = (item, clickAction) => {
		switch (clickAction) {
			case ACTIONS.leftClick:
				setSelectedItems((prevItems) => ({
					...prevItems,
					leftBoxSelectedItems: [...prevItems.leftBoxSelectedItems, item],
				}));
				break;
			case ACTIONS.rightClick:
				setSelectedItems((prevItems) => ({
					...prevItems,
					rightBoxSelectedItems: [...prevItems.rightBoxSelectedItems, item],
				}));
				break;
			default:
				return null;
		}
	};

	const handleDispatch = (action) => {
		const isTransferLeft = action === ACTIONS.transferLeft;
		dispatch({
			type: isTransferLeft ? ACTIONS.transferLeft : ACTIONS.transferRight,
			payload: isTransferLeft
				? selectedItems.rightBoxSelectedItems
				: selectedItems.leftBoxSelectedItems,
		});

		setSelectedItems({
			leftBoxSelectedItems: [],
			rightBoxSelectedItems: [],
		});
	};

	return (
		<div className="container">
			<TransferBox
				listItems={listState.leftItems}
				handleClick={handleClick}
				action={ACTIONS.leftClick}
				selectedItems={selectedItems.leftBoxSelectedItems}
			/>
			<div className="button-container">
				<Button
					title="Right"
					onClickHandler={() => handleDispatch(ACTIONS.transferRight)}
				/>
				<Button
					title="left"
					onClickHandler={() => handleDispatch(ACTIONS.transferLeft)}
				/>
			</div>
			<TransferBox
				listItems={listState.rightItems}
				handleClick={handleClick}
				action={ACTIONS.rightClick}
				selectedItems={selectedItems.rightBoxSelectedItems}
			/>
		</div>
	);
};
