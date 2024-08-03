import React from 'react';

export const TransferBox = ({
	listItems,
	handleClick,
	action,
	selectedItems,
}) => {
	const getStatus = (selectedItems, item) => {
		return selectedItems.includes(item);
	};
	return (
		<div className="box">
			{listItems?.map((item) => {
				return (
					<div key={item}>
						<h4
							onClick={() => handleClick(item, action)}
							className={`list-item ${
								getStatus(selectedItems, item) ? 'item-color' : ''
							}`}
						>
							{item}
						</h4>
					</div>
				);
			})}
		</div>
	);
};
