import { useEffect } from 'react';
import { connect } from 'react-redux';

import './App.css';
import { ACTIONS } from './reducers/mainReducer';
import OneItem from './components/OneItem';

function App({ text, loadingData, items, init }) {
  useEffect(() => {
    init();
  }, [])

  return (
    <div className="App">
      {loadingData && <div>Loading data...</div>}
      {!loadingData && (
        <div>
          {items.length > 0 && items.map(item => (
              <OneItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

const mapState = state => {
  const { main } = state;

  return {
    loadingData: main.loadingData,
    text: main.text,
    items: main.items,
  }
}

const mapDispatch = {
  init: ACTIONS.init,
}

export default connect(mapState, mapDispatch)(App);
