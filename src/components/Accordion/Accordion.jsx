import React, { Fragment, useState } from 'react';
import './style.css';

export const Accordion = () => {
	const [accordionData, setAccordionData] = useState([
		{
			id: 1,
			title: 'I acknowledge that I should stop the click propogation',
			content: 'Something .........................',
			isChecked: false,
			isOpen: false,
		},
		{
			id: 2,
			title: 'I acknowledge that I should stop the focus propogation',
			content: 'Something .........................',
			isChecked: false,
			isOpen: false,
		},
		{
			id: 3,
			title: 'I acknowledge that I should stop the aria-label propogation',
			content: 'Something .........................',
			isChecked: false,
			isOpen: false,
		},
	]);

	const handleAccordionClick = (event, id) => {
		setAccordionData((prevData) => {
			return prevData.map((item) =>
				item.id === id ? { ...item, isOpen: !item.isOpen } : item
			);
		});
	};

	const handleCheckboxClick = (event, id) => {
		event.stopPropagation();
		const { checked } = event.target;
		setAccordionData((prevData) =>
			prevData.map((item) =>
				item.id === id ? { ...item, isChecked: checked } : item
			)
		);
	};

	const checkButtonStatus = () => {
		return accordionData.every((item) => item.isChecked);
	};
	return (
		<>
			<div className="accordion-div">
				{accordionData.map((data, ind) => {
					return (
						<Fragment key={data.id}>
							<div
								className="sub-accrodion"
								onClick={(event) => handleAccordionClick(event, data.id)}
							>
								<input
									type="checkbox"
									onClick={(event) => handleCheckboxClick(event, data.id)}
								/>
								<h4>{data.title}</h4>
								<span style={{ fontSize: '30px' }}>⌄</span>
							</div>
							<div>{data.isOpen && data.content}</div>
						</Fragment>
					);
				})}
			</div>
			<button
				className="btn-submit"
				style={{ cursor: checkButtonStatus() ? 'pointer' : 'not-allowed' }}
				disabled={checkButtonStatus()}
			>
				Submit
			</button>
		</>
	);
};
