import React from 'react';
import Grid from '@material-ui/core/Grid';
import NavBar from './Components/NavBar';
import Display from './Components/Display';
import Settings from './Components/Settings';
import Tooltip from './Components/Tooltip';
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
}

const onDisplayTab = tab => {
  console.log("onDisplayTab",tab);
}

const onAddTab = e => {
  console.log("onAddTab");
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
        <Display />
      </Grid>
      <Grid item xs={3}>
        <Settings onUpdateSettings={onUpdateSettings} />
      </Grid>
    </Grid>
    </>
  );
}

export default App;
