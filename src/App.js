import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
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
      <Grid container>
        <Grid item xs={12}>
          <NavBar />
        </Grid>
        <Grid item xs={9}>
          <Display />
        </Grid>
        <Grid item xs={3}>
          <Settings />
        </Grid>
      </Grid>
      <Button onClick={saveStateLocally}>
        Save Current State
      </Button>
      <Button onClick={dropStateLocally}>
        Default State
      </Button>
    </Provider>
  );
}

export default App;
