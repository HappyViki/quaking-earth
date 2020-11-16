import React from 'react'
import { connect } from 'react-redux'
import {
  updatePanelSettings,
  deletePanel,
} from '../actions'
import fetchData from '../fetchData'
import './Settings.css';

const Settings = ({updatePanelSettings, deletePanel, fetchData, currentPanel, settings}) => {

  const handleSubmit = e => {
    e.preventDefault()
    const settings = Object.values(e.target).slice(0,6).reduce(
      (result, setting) => {
        result[setting.id] = setting.value
        return result
      }, {}
    )
    fetchData(currentPanel,settings)
  }

  const handleChange = e => {
    const newSettings = {...settings}
    newSettings[e.target.id] = e.target.value
    updatePanelSettings(currentPanel, newSettings)
  }

  const settingKeys = settings ? Object.keys(settings) : null

  const settingAttributes = {
    name: {
      label: 'Name',
      type: 'text'
    },
    location: {
      label: 'Location',
      type: 'text'
    },
    startTime: {
      label: 'Start Date',
      type: 'date'
    },
    endTime: {
      label: 'End Date',
      type: 'date'
    },
    magMin: {
      label: 'Minimum Magnitude',
      type: 'text'
    },
    magMax: {
      label: 'Maximum Magnitude',
      type: 'text'
    }
  }

	return (
		<div className="settings">
    {
      settingKeys ?
      <>
			<form onSubmit={handleSubmit}>
				<h2>Earthquake Settings</h2>
        {
          settingKeys && settingKeys.map(
            key => <input
              key={key}
    					id={key}
              className='field'
    					label={settingAttributes[key].label}
              type={settingAttributes[key].type}
    					value={settings[key]}
              onChange={handleChange}
    				/>
          )
        }

				<button
					variant="contained"
					type="submit"
				>
				Update
				</button>
        <p>
          Displays maximum 100 datapoints from up to one month of data
        </p>
			</form>
      <button
        onClick={()=>{deletePanel(currentPanel)}}
      >
      Delete Panel
      </button>
      </> : <p>Please add a panel by clicking the green button on the left of your screen.</p>
    }
		</div>
	)
}

const mapStateToProps = state => {
  if (!state.data.length) return {}
  const currentData = state.data[state.currentPanel]
  const settings = currentData.settings
	return {
    currentPanel: state.currentPanel,
		settings: settings
	};
};

const mapDispatchToProps = dispatch => ({
  updatePanelSettings: (index, settings) => {
    return dispatch(
      updatePanelSettings(index, settings)
    )
  },
  deletePanel: index => {
    return dispatch(
      deletePanel(index)
    )
  },
  fetchData: (index, settings) => {
    return dispatch(
      fetchData(index, settings)
    )
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
