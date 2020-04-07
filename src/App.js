import React from 'react';
import Grid from '@material-ui/core/Grid';
import NavBar from './Components/NavBar';
import Display from './Components/Display';
import Settings from './Components/Settings';
import Tooltip from './Components/Tooltip';
import data from './data'
import './App.css';

const state = {
  tooltip: {
    hovering: false,
    title: "Earthquake",
    time: "4/5/2020, 3:26:09 PM"
  },
  currentTab: 0,
  data: {
    "quake1": {
      fetching: false,
      settings: {},
      features: []
    },
    "quake2": {
      fetching: false,
      settings: {},
      features: []
    }
  }
}

const onUpdateSettings = e => {
  e.preventDefault()
  const form = e.target
  console.log("onUpdateSettings",form);
  fetchData(
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
    console.log("fetched",quakes)
  } )
}

function App() {
  return (
    <>
    <Tooltip {...state.tooltip} />
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <NavBar currentTab={state.currentTab} tabs={Object.keys(state.data)} onDisplayTab={onDisplayTab} onAddTab={onAddTab} />
      </Grid>
      <Grid item xs={9}>
        <Display data={data} />
      </Grid>
      <Grid item xs={3}>
        <Settings onUpdateSettings={onUpdateSettings} />
      </Grid>
    </Grid>
    </>
  );
}

export default App;
