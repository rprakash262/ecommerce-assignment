import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './App.css';
import { ACTIONS } from './reducers/mainReducer';
import OneItem from './components/OneItem';
import Header from './components/Header';
import Cart from './components/Cart';
import CustomCheckout from './components/CustomCheckout';

function App({
  view,
  loadingData,
  items,
  headerItems,
  selectedTab,
  cartItems,
  init,
  selectTab,
  addToCart,
  goToCart,
  removeItemFromCart,
  startCheckout
}) {
  useEffect(() => {
    init();
  }, [])

  return (
    <div className="App">
      <Header
        items={headerItems}
        selectedTab={selectedTab}
        cartItems={cartItems}
        selectTab={selectTab}
        goToCart={goToCart}
      />
        <div className="container">
          {view === 'main' && (
            <React.Fragment>
              {loadingData && <div>Loading data...</div>}
              {!loadingData && (
                <div>
                  {items.length > 0 && items.map(item => (
                      <OneItem
                        key={item.id}
                        item={item}
                        addToCart={addToCart}
                        cartItems={cartItems}
                      />
                  ))}
                </div>
              )}
            </React.Fragment>
          )}
          {view === 'cart' && (
              <Cart
                cartItems={cartItems}
                removeItemFromCart={removeItemFromCart}
                startCheckout={startCheckout}
              />
          )}
          {view === 'checkout' && (
            <CustomCheckout />
          )}
      </div>
    </div>
  );
}

const mapState = state => {
  const { main } = state;

  return {
    view: main.view,
    loadingData: main.loadingData,
    items: main.items,
    headerItems: main.headerItems,
    selectedTab: main.selectedTab,
    cartItems: main.cartItems,
  }
}

const mapDispatch = {
  init: ACTIONS.init,
  selectTab: ACTIONS.selectTab,
  addToCart: ACTIONS.addToCart,
  goToCart: ACTIONS.goToCart,
  removeItemFromCart: ACTIONS.removeItemFromCart,
  startCheckout: ACTIONS.startCheckout,
}

export default connect(mapState, mapDispatch)(App);
