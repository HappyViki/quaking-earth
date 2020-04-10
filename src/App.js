import React from 'react';
import Grid from '@material-ui/core/Grid';
import NavBar from './Components/NavBar';
import Display from './Components/Display';
import Settings from './Components/Settings';
import defaultState from './defaultState'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import {
  updateView,
  addView,
  currentView,
  updateViewFeatures
} from './actions'
import './App.css';

const getLocalState = () => {
  const savedState = localStorage.getItem('quaking-earth-state')
  const state = savedState ? JSON.parse(savedState) : defaultState
  return state
};

const store = createStore(rootReducer, getLocalState())

const saveStateLocally = () => {
  const state = JSON.stringify(store.getState());
  localStorage.setItem('quaking-earth-state', state);
};

console.log(store.getState())

const onUpdateSettings = e => {
  e.preventDefault()
  const form = e.target
  console.log("onUpdateSettings",form);
  fetchData(
    form.name.value,
    form.location.value,
    form.startTime.value,
    form.endTime.value,
    form.magMin.value,
    form.magMax.value
  )
}

const onDisplayTab = tab => {
  console.log("onDisplayTab",tab);
}

const onAddTab = e => {
  console.log("onAddTab");
}

const fetchData = (
  name,
  location,
  startTime,
  endTime,
  magMin,
  magMax
) => {
  fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson')
  .then( data => data.json() )
  .then( json => {
    const quakes = json.features
    .filter(
      quake => {
        const q = quake.properties
        const a = location ? q.place.includes(location) : true
        const b = startTime ? q.time >= Date.parse(startTime) : true
        const c = endTime ? q.time <= Date.parse(endTime) : true
        const d = magMin ? q.mag >= magMin : true
        const e = magMax ? q.mag <= magMax : true
        return a && b && c && d && e
      }
    )
    .map(
      quake => ({
        "id": quake.properties.id,
        "title": quake.properties.title,
        "time": quake.properties.time,
        "mag": quake.properties.mag,
        "coordinates": quake.properties.coordinates
      })
    ).reverse()
    const index = store.getState().currentIndex
    store.dispatch(updateView(
      index,
      {
        name: name,
        settings: {
          location: location,
          startTime: startTime,
          endTime: endTime,
          magMin: magMin,
          magMax: magMax
        },
        features: quakes
      }
    ))
    saveStateLocally()
    console.log("fetched",quakes)
  } )
}

function App() {
  const state = store.getState()
  console.log(state);
  const data = state.data
  const tabs = data.length ? data.map( dataSet => dataSet.name ) : []
  const features = data.length ? data[state.currentIndex].features : null

  return (
    <Provider store={store}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <NavBar
            onDisplayTab={onDisplayTab}
            onAddTab={onAddTab}
          />
        </Grid>
        <Grid item xs={9}>
          <Display features={features} />
        </Grid>
        <Grid item xs={3}>
          <Settings onUpdateSettings={onUpdateSettings} />
        </Grid>
      </Grid>
    </Provider>
  );
}

export default App;
