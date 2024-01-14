import React from 'react';

export default function OtpLogin() {
	const [otpData, setOtpData] = React.useState(
		Array.from({ length: 5 }, () => {
			return { otpValue: '' };
		})
	);
	const inputRefs = React.useRef([]);

	React.useEffect(() => {
		if (inputRefs.current[0]) {
			inputRefs.current[0].focus();
		}
	}, []);

	const handleChange = (event, index) => {
		const copiedData = [...otpData];
		copiedData[index].otpValue = event.target.value;
		setOtpData(copiedData);

		if (inputRefs.current[index + 1] && copiedData[index].otpValue !== '') {
			inputRefs.current[index + 1].focus();
		}
	};

	const handleKeyUp = (event, index) => {
		if (event.which === 39) {
			if (inputRefs.current[index + 1]) {
				inputRefs.current[index + 1].focus();
			}
		}
		if (event.which === 37) {
			if (inputRefs.current[index - 1]) {
				inputRefs.current[index - 1].focus();
			}
		}
	};
	const handleClick = (index) => {
		if (index > 0 && !otpData[index - 1].otpValue) {
			inputRefs.current[index - 1].focus();
		}
	};
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				marginTop: '10%',
				gap: '20px',
			}}
		>
			{otpData.map((_, otpIndex) => {
				return (
					<input
						key={otpIndex}
						ref={(input) => (inputRefs.current[otpIndex] = input)}
						style={{
							width: '100px',
							height: '50px',
							borderRadius: '12px',
							fontSize: '20px',
							textAlign: 'center',
						}}
						onChange={(event) => handleChange(event, otpIndex)}
						onKeyDown={(event) => handleKeyUp(event, otpIndex)}
						onClick={() => handleClick(otpIndex)}
					/>
				);
			})}
		</div>
	);
}
