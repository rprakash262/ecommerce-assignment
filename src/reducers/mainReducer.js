const TOGGLE_LOADING_DATA = 'main/TOGGLE_LOADING_DATA';
const SET_ITEMS = 'main/SET_ITEMS';
const SET_HEADER_ITEMS = 'main/SET_HEADER_ITEMS';

const toggleLoadingData = bool => ({ type: TOGGLE_LOADING_DATA, loadingData: bool });
const setItems = items => ({ type: SET_ITEMS, items });
const setHeaderItems = headerItems => ({ type: SET_HEADER_ITEMS, headerItems });

const defaultState = {
	loadingData: true,
	items: [],
	headerItems: []
};

const init = () => async (dispatch) => {
	const res = await fetch('https://rprakash262-affmarkserver.onrender.com/main/home-page-content');
	const data = await res.json();
	const { success, result } = data;

	if (success) {
		const itemsArr = [];
		Object.values(result.items).forEach(item => itemsArr.push(...item))
		const headerItems = Object.keys(result.items).map(item => item);
		dispatch(setItems(itemsArr));
		dispatch(setHeaderItems(headerItems));
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
		case SET_HEADER_ITEMS:
			return Object.assign({}, state, { headerItems: action.headerItems });
		default:
			return state
	}
}

export default mainReducer;