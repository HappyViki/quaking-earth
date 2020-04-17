import React from 'react'
import { connect } from 'react-redux'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {
  addView,
  currentView
} from '../actions'

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const NavBar = ({currentTab, tabs, onDisplayTab, onAddTab}) => {
	return (
		<AppBar position="static">
      <Tabs value={currentTab} aria-label="simple tabs example">
  			{tabs && tabs.map((tab, key) =>
          <Tab key={key} label={tab} onClick={()=>onDisplayTab(key)} {...a11yProps(tab)} />
  			)}
        <Tab
          style={{background: '#40a9ff'}}
          label='+' {...a11yProps('add-tab')}
          onClick={onAddTab}
        />
      </Tabs>
		</AppBar>
	)
}

const mapStateToProps = state => {
  if (!state.data.length) return {}
	return {
    currentTab: state.currentIndex,
    tabs: state.data.map(
      d => d.settings.name
    )
	};
};

const mapDispatchToProps = ( dispatch, props ) => ({
  onAddTab: () => dispatch(
    addView()
  ),
  onDisplayTab: index => dispatch(
    currentView(index)
  )
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
