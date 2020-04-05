import React from 'react';
import Tabs from './Components/Tabs';
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
  const inputs = e.target.form
  console.log("onUpdateSettings",inputs);
}

const onDisplayTab = tab => {
  console.log("onDisplayTab",tab);
}

const onAddTab = e => {
  console.log("onDisplayTab");
}

function App() {
  return (
    <div className="App">
      <Tabs tabs={Object.keys(state.data)} onDisplayTab={onDisplayTab} onAddTab={onAddTab} />
      <Display />
      <Settings onUpdateSettings={onUpdateSettings} />
      <Tooltip {...state.tooltip} />
    </div>
  );
}

export default App;
