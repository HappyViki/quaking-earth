import React from 'react'
import { connect } from 'react-redux'
import {
  addPanel,
  setCurrentPanel
} from '../actions'
import './NavBar.css';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const NavBar = ({currentPanel, tabs, setCurrentPanel, addPanel}) => {

  return (
    <div value={currentPanel} aria-label="earthquake panel tabs" className="navbar">
			{tabs && tabs.map((tab, key) =>
        <button key={key} onClick={()=>setCurrentPanel(key)} className={currentPanel === key ? 'tab current' : 'tab'} {...a11yProps(tab)}>{tab}</button>
			)}
      <button
        className="add-tab"
         {...a11yProps('add-tab')}
        onClick={addPanel}
      >+</button>
    </div>
	)
}

const mapStateToProps = state => {
  if (!state.data.length) return {}
	return {
    currentPanel: state.currentPanel,
    tabs: state.data.map(
      d => d.settings.name
    )
	};
};

const mapDispatchToProps = ( dispatch, props ) => ({
  addPanel: () => dispatch(
    addPanel()
  ),
  setCurrentPanel: index => dispatch(
    setCurrentPanel(index)
  )
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
