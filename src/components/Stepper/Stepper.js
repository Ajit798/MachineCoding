import React, { useCallback } from 'react';
import Step from './Step';
import StepperButton from './stepperButton';
import StepperTitle from './StepperTitle';
import { mockStepData } from './mockData';

export default function Stepper() {
	const [stepData, setStepData] = React.useState(mockStepData);
	const [count, setCount] = React.useState(1);

	const handleClick = useCallback(() => {
		const copied = [...stepData];
		const index = copied.findIndex((ele) => ele.id === count);
		copied[index].isCompelted = true;
		setStepData(copied);
		setCount((prev) => prev + 1);
	}, [count, stepData]);
	return (
		<>
			<StepperTitle stepData={stepData} />
			<Step stepData={stepData} />
			<StepperButton stepData={stepData} handleClick={handleClick} />
		</>
	);
}
