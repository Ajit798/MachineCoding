import React, { useRef } from 'react';
import InputBox from './inputBox';
import './otp.css';

const OTP = '1234';

export default function Otp() {
	const listRefs = useRef([]);
	const [otp, setOtp] = React.useState([]);
	const [otpStatus, setOtpStatus] = React.useState(false);

	const handleChange = (ind, event) => {
		const { name, value } = event.target;

		const copiedData = [...otp];
		const index = copiedData.findIndex((ele) => ele.id === name);

		index !== -1
			? (copiedData[ind].value = value)
			: copiedData.push({ id: name, value: value });

		setOtp(copiedData);
		if (ind < 3) {
			listRefs.current[ind + 1].focus();
		}
	};

	const handleKeyDown = (event, ind) => {
		if (event.which === 8) {
			event.preventDefault();
			if (ind > 0) {
				listRefs.current[ind - 1].focus();
			}
			const data = [...otp];
			const findIndex = data.findIndex((ele) => ele.id === event.target.name);
			if (findIndex !== -1) {
				data[findIndex].value = '';
			}

			setOtp(data);
		}
	};

	const handleButtonClick = () => {
		const emptyInput = listRefs.current.filter((ele) => !Boolean(ele.value));
		if (emptyInput.length) {
			emptyInput.forEach((ele) => (ele.style.border = '2px solid red'));
		}
		const enteredOtp = otp.map((ele) => ele.value).join('');
		setOtpStatus(enteredOtp === OTP);
	};

	return (
		<div className="inputBox">
			{!otpStatus ? (
				<InputBox
					otp={otp}
					handleChange={handleChange}
					handleKeyDown={handleKeyDown}
					ref={listRefs}
				/>
			) : (
				<h2>OTP Verified ....</h2>
			)}
			{!otpStatus ? (
				<button className="btn" onClick={handleButtonClick}>
					Submit
				</button>
			) : null}
		</div>
	);
}
