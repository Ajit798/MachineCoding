import React from 'react';

function StepperTitle({ stepData }) {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				padding: '20px',
				alignItems: 'center',
			}}
		>
			{stepData.map((step) => {
				return (
					<div key={step.id} style={{ display: 'flex' }}>
						<div>
							<h2>{step.name}</h2>
							{step.isCompelted && <h4>Completed</h4>}
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default StepperTitle;
