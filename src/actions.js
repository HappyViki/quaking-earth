export const ADD_PANEL = 'ADD_PANEL'
export const DELETE_PANEL = 'DELETE_PANEL'
export const UPDATE_PANEL = 'UPDATE_PANEL'
export const CURRENT_PANEL = 'CURRENT_PANEL'

export const UPDATE_PANEL_SETTINGS = 'UPDATE_PANEL_SETTINGS'
export const UPDATE_PANEL_FEATURES = 'UPDATE_PANEL_FEATURES'

export const START_FETCHING = 'START_FETCHING'
export const STOP_FETCHING = 'STOP_FETCHING'

export const updatePanel = (index, payload) => ({
	type: UPDATE_PANEL,
	index: index,
	payload: payload
})


export const updatePanelSettings = (index, payload) => ({
	type: UPDATE_PANEL_SETTINGS,
	index: index,
	payload: payload
})

export const updatePanelFeatures = (index, payload) => ({
	type: UPDATE_PANEL_FEATURES,
	index: index,
	payload: payload
})

export const addPanel = (payload = {}) => ({
	type: ADD_PANEL,
	payload: {
    name: payload.name ? payload.name : "Default",
    settings: payload.settings ? payload.settings : {
    	"name": "new quake panel",
      "location": "",
      "startTime": "",
      "endTime": "",
      "magMin": "",
      "magMax": ""
    },
    features: payload.features ? payload.features : {}
  }
})

export const deletePanel = index => ({
	type: DELETE_PANEL,
	index: index
})

export const setCurrentPanel = index => ({
	type: CURRENT_PANEL,
	index: index
})

export const startFetching = () => ({ type: START_FETCHING })
export const stopFetching = () => ({ type: STOP_FETCHING })
