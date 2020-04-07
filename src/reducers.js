import { combineReducers } from 'redux'
import {
  ADD_VIEW,
  UPDATE_VIEW,
	CURRENT_VIEW,
  UPDATE_VIEW_FEATURES
} from './actions'

const currentIndex = (state=0, action) => {
	switch (action.type) {
		case CURRENT_VIEW:
			return action.index
		default:
			return state
	}
}

const data = (state=[], action) => {
  const newState = [...state]

	switch (action.type) {
		case ADD_VIEW:
			return [...state, action.payload]
		case UPDATE_VIEW:
			newState[action.index] = action.payload
			return newState
    case UPDATE_VIEW_FEATURES:
      newState[action.index].features = action.payload
      return newState
		default:
			return state
	}
}

const rootReducer = combineReducers({
  currentIndex,
  data
})

export default rootReducer
