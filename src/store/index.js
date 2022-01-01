import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import comicReducer from './comic/reducer';

const composeEnhancers =
	(typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
	comicReducer,
});

export default createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
