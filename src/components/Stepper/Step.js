import React from 'react';

function Step({ stepData }) {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				padding: '20px',
			}}
		>
			{Array.from({ length: stepData.length }).map((_, ind) => {
				return (
					<div
						key={ind}
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-evenly',
						}}
					>
						<div
							style={{
								width: '60px',
								border: '1px solid black',
								height: '60px',
								borderRadius: '100%',
								textAlign: 'center',
								backgroundColor: `${stepData[ind].isCompelted ? 'green' : ''}`,
							}}
						>
							<h4>{!stepData[ind].isCompelted ? ind + 1 : '✅ '}</h4>
						</div>
						{!(ind + 1 === stepData.length) && (
							<div
								style={{
									width: '400px',
									border: '1px solid grey',
									height: '10px',
									backgroundColor: `${
										stepData[ind].isCompelted ? 'green' : ''
									}`,
								}}
							/>
						)}
					</div>
				);
			})}
		</div>
	);
}

export default Step;
