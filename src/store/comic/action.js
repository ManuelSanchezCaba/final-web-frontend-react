import { SET_COMICS, SET_COMICS_BY_NAME } from './types';

export const setComic = (comics) => {
	return {
		type: SET_COMICS,
		payload: comics,
	};
};

export const setComicByName = (comics) => {
	return {
		type: SET_COMICS_BY_NAME,
		payload: comics,
	};
};
