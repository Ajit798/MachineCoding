import { ACTIONS } from './utils/constants';

export const transferListReducer = (state, action) => {
	const { payload } = action;
	switch (action.type) {
		case ACTIONS.transferLeft: {
			return {
				...state,
				leftItems: [...state.leftItems, ...payload],
				rightItems: state.rightItems.filter((item) => !payload.includes(item)),
			};
		}
		case ACTIONS.transferRight: {
			return {
				...state,
				rightItems: [...state.rightItems, ...payload],
				leftItems: state.leftItems.filter((item) => !payload.includes(item)),
			};
		}
		default:
			return null;
	}
};
