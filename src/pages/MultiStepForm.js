import React, { useCallback } from 'react';
import Form1 from '../components/Form1';
import { useFormProvider } from '../context/formcontext';
import Form2 from '../components/Form2';
import Form3 from '../components/Form3';

function MultiStepForm() {
	const [formState, setFormState] = React.useState(0);
	const data = useFormProvider();

	const handleChangeForm1 = useCallback((event) => {
		data.dispatch({
			type: 'Form1',
			payload: event,
		});
	}, []);
	const handleChangeForm2 = (event) => {
		data.dispatch({
			type: 'Form2',
			payload: event,
		});
	};
	const handleChangeForm3 = (event) => {
		data.dispatch({
			type: 'Form3',
			payload: event,
		});
	};

	const handleNextClick = () => {
		setFormState((prev) => prev + 1);
	};
	const handlePrevClick = () => {
		setFormState((prev) => prev - 1);
	};

	switch (formState) {
		case 0:
			return (
				<Form1
					handleChange={handleChangeForm1}
					handleNext={handleNextClick}
					form={data.state.form1}
				/>
			);
		case 1:
			return (
				<Form2
					handleChange={handleChangeForm2}
					handleNext={handleNextClick}
					handlePrev={handlePrevClick}
					form={data.state.form2}
				/>
			);
		case 2:
			return (
				<Form3
					handleChange={handleChangeForm3}
					handlePrev={handlePrevClick}
					form={data.state.form3}
				/>
			);

		default:
			return null;
	}
}

export default MultiStepForm;
