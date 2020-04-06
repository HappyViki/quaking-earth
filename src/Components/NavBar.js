import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

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
          <Tab key={key} label={tab} onClick={onDisplayTab} {...a11yProps(tab)} />
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

export default NavBar
