import React, { useContext, useReducer } from 'react';
import { initialState } from '../mockData/constants';
export const FormContext = React.createContext({
	state: {},
	dispatch: () => {},
});

export const FormProvider = ({ children }) => {
	const formReducer = (state, action) => {
		const { name, value } = action.payload.target;
		switch (action.type) {
			case 'Form1': {
				return {
					...state,
					form1: {
						...state.form1,
						[name]: value,
					},
				};
			}
			case 'Form2': {
				return {
					...state,
					form2: {
						...state.form2,
						[name]: value,
					},
				};
			}
			case 'Form3': {
				return {
					...state,
					form3: {
						...state.form3,
						[name]: value,
					},
				};
			}
			default:
				break;
		}
	};

	const [state, dispatch] = useReducer(formReducer, initialState);

	return (
		<FormContext.Provider value={{ state, dispatch }}>
			{children}
		</FormContext.Provider>
	);
};

export const useFormProvider = () => {
	const data = useContext(FormContext);
	return data;
};
