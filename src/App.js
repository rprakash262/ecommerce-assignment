import { useEffect } from 'react';
import { connect } from 'react-redux';

import './App.css';
import { ACTIONS } from './reducers/mainReducer';
import OneItem from './components/OneItem';
import Header from './components/Header';

function App({ text, loadingData, items, headerItems, init }) {
  useEffect(() => {
    init();
  }, [])

  return (
    <div className="App">
      <Header items={headerItems} />
      <div>
        {loadingData && <div>Loading data...</div>}
        {!loadingData && (
          <div>
            {items.length > 0 && items.map(item => (
                <OneItem key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const mapState = state => {
  const { main } = state;

  return {
    loadingData: main.loadingData,
    text: main.text,
    items: main.items,
    headerItems: main.headerItems,
  }
}

const mapDispatch = {
  init: ACTIONS.init,
}

export default connect(mapState, mapDispatch)(App);
