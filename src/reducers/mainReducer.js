import { cloneDeep } from 'lodash';

const TOGGLE_LOADING_DATA = 'main/TOGGLE_LOADING_DATA';
const SET_RESULT = 'main/SET_RESULT';
const SET_ITEMS = 'main/SET_ITEMS';
const SET_HEADER_ITEMS = 'main/SET_HEADER_ITEMS';
const SET_SELECTED_TAB = 'main/SET_SELECTED_TAB';
const SET_CART_ITEMS = 'main/SET_CART_ITEMS';
const SET_VIEW = 'main/SET_VIEW';

const toggleLoadingData = bool => ({ type: TOGGLE_LOADING_DATA, loadingData: bool });
const setResult = result => ({ type: SET_RESULT, result });
const setItems = items => ({ type: SET_ITEMS, items });
const setHeaderItems = headerItems => ({ type: SET_HEADER_ITEMS, headerItems });
const setSelectedTab = tab => ({ type: SET_SELECTED_TAB, selectedTab: tab });
const setCartItems = cartItems => ({ type: SET_CART_ITEMS, cartItems });
const setView = view => ({ type: SET_VIEW, view });

const defaultState = {
  view: 'main',
  loadingData: true,
  result: {},
  items: [],
  headerItems: [],
  selectedTab: '',
  cartItems: [],
};

const init = () => async dispatch => {
  const res = await fetch('https://rprakash262-affmarkserver.onrender.com/main/home-page-content');
  const data = await res.json();
  const { success, result } = data;

  if (success) {
    const itemsArr = [];
    Object.values(result.items).forEach(item => itemsArr.push(...item))
    const headerItems = Object.keys(result.items).map(item => item);

    dispatch(setResult(result));
    dispatch(setSelectedTab(headerItems[0]));
    dispatch(setItems(itemsArr));
    dispatch(setHeaderItems(headerItems));
    dispatch(toggleLoadingData(false));
  }
}

const selectTab = tab => (dispatch, getState) => {
  const { result, view } = getState().main;
  let itemsArr = [];

  if (tab === 'home') {
    Object.values(result.items).forEach(item => itemsArr.push(...item))
  } else {
    itemsArr = result.items[tab];
  }

  dispatch(setSelectedTab(tab));
  dispatch(setItems(itemsArr));

  if (view === 'cart') {
    dispatch(setView('main'));
  }
}

const addToCart = (item) => (dispatch, getState) => {
  const { cartItems } = getState().main;

  const clonedCartItems = cloneDeep(cartItems);

  clonedCartItems.push(item);

  dispatch(setCartItems(clonedCartItems));
}

const goToCart = () => dispatch => {
  dispatch(setView('cart'));
  dispatch(setSelectedTab(''));
}

const removeItemFromCart = itemId => (dispatch, getState) => {
  console.log(itemId)
  const { cartItems } = getState().main;

  const clonedCartItems = cloneDeep(cartItems);

  const x = clonedCartItems.filter(item => item.id !== itemId);

  console.log({x, clonedCartItems})
    // console.log(index)
  // clonedCartItems.splice(index, 1);
  dispatch(setCartItems(x));
}

export const ACTIONS = {
  init,
  selectTab,
  addToCart,
  goToCart,
  removeItemFromCart,
}

function mainReducer (state = defaultState, action) {
  switch (action.type) {
    case TOGGLE_LOADING_DATA:
      return Object.assign({}, state, { loadingData: action.loadingData});
    case SET_RESULT:
      return Object.assign({}, state, { result: action.result });
    case SET_ITEMS:
      return Object.assign({}, state, { items: action.items });
    case SET_HEADER_ITEMS:
      return Object.assign({}, state, { headerItems: action.headerItems });
    case SET_SELECTED_TAB:
      return Object.assign({}, state, { selectedTab: action.selectedTab });
    case SET_CART_ITEMS:
      return Object.assign({}, state, { cartItems: action.cartItems });
    case SET_VIEW:
      return Object.assign({}, state, { view: action.view });
    default:
      return state
  }
}

export default mainReducer;