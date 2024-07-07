import React from 'react';
import './style.css';

const COLORS = {
	success: 'green',
	info: 'yellow',
	warning: 'orange',
	error: 'red',
};
export const Toast = () => {
	const [toastState, setToastState] = React.useState([]);

	React.useEffect(() => {
		let timers = [];

		for (let i = 0; i < toastState.length; i++) {
			let id;
			const { delay, status } = toastState[i];

			if (delay) {
				id = setTimeout(() => {
					setToastState((prevData) => {
						return prevData.filter((item) => item.status !== status);
					});
				}, delay);
				timers.push(id);
			}
		}

		return () => {
			timers.forEach((item) => clearTimeout(item));
		};
	}, [toastState]);

	const trigger = (toast) => {
		setToastState((prevData) => [...prevData, toast]);
	};

	return (
		<>
			<div className="main-container">
				<div
					className="box success"
					onClick={() =>
						trigger({ message: 'Success', status: 'success', delay: 1000 })
					}
				>
					Show Success
				</div>
				<div
					className="box info"
					onClick={() =>
						trigger({ message: 'Info', status: 'info', delay: 2000 })
					}
				>
					Show Info
				</div>
			</div>
			<div className="main-container">
				<div
					className="box success"
					onClick={() =>
						trigger({ message: 'Error', status: 'error', delay: 3000 })
					}
				>
					Show Error
				</div>
				<div
					className="box warning"
					onClick={() =>
						trigger({ message: 'Warning', status: 'warning', delay: 4000 })
					}
				>
					Show Warning
				</div>
			</div>

			{toastState.map((item, ind) => (
				<div
					key={`item?.message${ind}`}
					style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
				>
					<div
						className="toast-container"
						style={{
							backgroundColor: COLORS[item.status],
						}}
					>
						{item?.message && item.message}
					</div>
				</div>
			))}
		</>
	);
};
