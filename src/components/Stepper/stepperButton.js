import React, { useMemo } from 'react';

function StepperButton({ handleClick, stepData }) {
	const status = useMemo(() => {
		console.log(stepData);

		return stepData.every((step) => step.isCompelted);
	}, [stepData]);

	return (
		<div>
			<button onClick={handleClick} disabled={status}>
				Next
			</button>
		</div>
	);
}

export default React.memo(StepperButton);
