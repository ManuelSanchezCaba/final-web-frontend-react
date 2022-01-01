import { SET_COMICS, SET_COMICS_BY_NAME } from './types';

let initialState = {
	comics: [],
};

export default (state = initialState, action) => {
	const { payload, type } = action;
	switch (type) {
		case SET_COMICS:
			return {
				...state,
				comics: payload, // [...state.comics, payload],
			};
		case SET_COMICS_BY_NAME:
			return {
				...state,
				comics: payload,
			};
		default:
			return state;
	}
};
