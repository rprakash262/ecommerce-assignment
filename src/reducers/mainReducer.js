const TOGGLE_LOADING_DATA = 'main/TOGGLE_LOADING_DATA';
const SET_ITEMS = 'main/SET_ITEMS';

const toggleLoadingData = bool => ({ type: TOGGLE_LOADING_DATA, loadingData: bool });
const setItems = items => ({ type: SET_ITEMS, items });

const defaultState = {
	text: 'Hello App',
	loadingData: true,
	items: [],
};

const init = () => async (dispatch) => {
	const res = await fetch('https://rprakash262-affmarkserver.onrender.com/main/home-page-content');
	const data = await res.json();
	const { success, result } = data;

	if (success) {
		dispatch(setItems(result));
		dispatch(toggleLoadingData(false));
	}
}

export const ACTIONS = {
	init
}

function mainReducer (state = defaultState, action) {
	switch (action.type) {
		case TOGGLE_LOADING_DATA:
			return Object.assign({}, state, { loadingData: action.loadingData});
		case SET_ITEMS:
			return Object.assign({}, state, { items: action.items });
		default:
			return state
	}
}

export default mainReducer;