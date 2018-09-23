import { createStore } from 'redux';
import * as fixtures from './fixture.json';


let ACTIONS = {
	UPDATE_ANSWERS: ({ answers, ...state }, { answer }) => ({
		answers: { ...answers, ...answer },
		...state
	})
	,

	REMOVE_TODO: ({ data, ...state }, { todo }) => ({
		data: data.filter(i => i !== todo),
		...state
	})
};

const INITIAL = {
	quiz: fixtures,
	answers: {}
};

export default createStore((state, action) => (
	action && ACTIONS[action.type] ? ACTIONS[action.type](state, action) : state
), INITIAL, typeof devToolsExtension === 'function' ? devToolsExtension() : undefined);
