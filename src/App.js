import React from 'react';
import NavBar from './Components/NavBar';
import Display from './Components/Display';
import Settings from './Components/Settings';
import defaultState from './defaultState'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import rootReducer from './reducers'
import './App.css';

const getLocalState = () => {
  const savedState = localStorage.getItem('quaking-earth-state')
  const state = savedState ? JSON.parse(savedState) : defaultState
  return state
};

const store = createStore(rootReducer, getLocalState(), applyMiddleware(thunk))

const saveStateLocally = () => {
  const state = JSON.stringify(store.getState());
  localStorage.setItem('quaking-earth-state', state);
};
const dropStateLocally = () => {
  localStorage.removeItem('quaking-earth-state');
};

function App() {
  return (
    <Provider store={store}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <NavBar />
        <div style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
          <Display />
          <Settings />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <button onClick={saveStateLocally}>
            Save Current State
          </button>
          <button onClick={dropStateLocally}>
            Default State
          </button>
        </div>
      </div>
      <div className="tooltip"></div>
    </Provider>
  );
}

export default App;
