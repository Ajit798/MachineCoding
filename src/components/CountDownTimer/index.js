import React from 'react';

export const CountDownTimer = () => {
	const [countDown, setCountDown] = React.useState(0);
	const [isTimerRunning, setIsTimerRunning] = React.useState(null);

	React.useEffect(() => {
		let timer;
		if (isTimerRunning) {
			timer = setInterval(() => {
				setCountDown((prev) => {
					if (prev > 0) {
						return prev - 1;
					} else {
						clearInterval(timer);
						return 0;
					}
				});
			}, 1000);
		}

		return () => {
			clearInterval(timer);
		};
	}, [isTimerRunning]);

	const getButtonText = () => {
		if (typeof isTimerRunning === 'object') {
			return 'Pause';
		} else {
			if (isTimerRunning) {
				return 'Pause';
			}
			return 'Resume';
		}
	};
	return (
		<div
			style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}
		>
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<h2>Please Enter the countdown input</h2>
				<input
					placeholder="Enter the time....."
					style={{ alignSelf: 'center' }}
					name="input-timer"
					value={countDown}
					onChange={(event) => setCountDown(event.target.value)}
					type="number"
					min={0}
				/>
				<h1 style={{ alignSelf: 'center' }}>Count- {countDown}</h1>

				<div style={{ display: 'flex', alignSelf: 'center', gap: '10px' }}>
					<button
						style={{
							padding: '10px',
							border: 'none',
							borderRadius: '12px',
							backgroundColor: 'green',
							color: 'white',
						}}
						onClick={() => setIsTimerRunning(true)}
					>
						Start
					</button>
					<button
						onClick={() => setIsTimerRunning((prev) => !prev)}
						style={{
							padding: '10px',
							border: 'none',
							borderRadius: '12px',
							backgroundColor: 'yellowgreen',
							color: 'black',
						}}
					>
						{getButtonText()}
					</button>
					<button
						style={{
							padding: '10px',
							border: 'none',
							borderRadius: '12px',
							backgroundColor: 'red',
							color: 'white',
						}}
						onClick={() => {
							setCountDown(0);
							setIsTimerRunning(false);
						}}
					>
						Reset
					</button>
				</div>
			</div>
		</div>
	);
};
