import React from 'react';

export default function ProgressBar() {
	const [isBarEnabled, setIsBarEnabled] = React.useState(false);
	const [startProgress, setStartProgress] = React.useState(0);
	const ref = React.useRef(null);

	React.useEffect(() => {
		if (ref) {
			ref.current.addEventListener('transitionstart', () => {
				setStartProgress(performance.now());
			});
		}

		return () => {
			ref.current.removeEventListener('transitionstart', () => {});
		};
	}, []);
	return (
		<>
			<button
				onClick={() => {
					setIsBarEnabled(true);
					ref.current.style.transition = 'transform 2s ease';
				}}
				style={{ marginBottom: '30px' }}
			>
				Add Bar
			</button>
			<button
				onClick={() => {
					const time = performance.now() - startProgress;

					const progress = (time / 2000) * 100;
					console.log(time / 2000);
					ref.current.style.transform = `scaleX(${Number(
						(time / 2000).toFixed(2)
					)})`;
					ref.current.style.transition = 'none';
					setIsBarEnabled(false);
				}}
			>
				Pause
			</button>
			<div className="progress-bar">
				<div
					ref={ref}
					className={`child-progress ${isBarEnabled ? 'fill' : undefined}`}
				></div>
			</div>
		</>
	);
}
