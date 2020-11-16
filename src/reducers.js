import { combineReducers } from 'redux'
import {
  ADD_PANEL,
  DELETE_PANEL,
  UPDATE_PANEL,
	CURRENT_PANEL,
  UPDATE_PANEL_SETTINGS,
  UPDATE_PANEL_FEATURES,
  START_FETCHING,
  STOP_FETCHING
} from './actions'

const currentPanel = (state=0, action) => {
	switch (action.type) {
    case DELETE_PANEL:
      return action.index > 1 ? action.index - 1 : 0
		case CURRENT_PANEL:
			return action.index
		default:
			return state
	}
}

const data = (state=[], action) => {
  const newState = [...state]

	switch (action.type) {
		case ADD_PANEL:
			return [...state, action.payload]
    case DELETE_PANEL:
      return newState.filter(
        (panel, index) => index !== action.index
      )
		case UPDATE_PANEL:
			newState[action.index] = action.payload
			return newState
    case UPDATE_PANEL_SETTINGS:
      newState[action.index].settings = action.payload
      return newState
    case UPDATE_PANEL_FEATURES:
      newState[action.index].features = action.payload
      return newState
		default:
			return state
	}
}

const fetching = (state=false, action) => {
	switch (action.type) {
		case START_FETCHING:
			return true
		case STOP_FETCHING:
			return false
		default:
			return state
	}
}

const rootReducer = combineReducers({
  currentPanel,
  data,
  fetching
})

export default rootReducer
