export const ADD_VIEW = 'ADD_VIEW'
export const UPDATE_VIEW = 'UPDATE_VIEW'
export const CURRENT_VIEW = 'CURRENT_VIEW'

export const UPDATE_VIEW_FEATURES = 'UPDATE_VIEW_FEATURES'

export function updateView(index, payload) {
	return {
		type: UPDATE_VIEW,
		index: index,
		payload: payload
	}
}

export function updateViewFeatures(index, payload) {
	return {
		type: UPDATE_VIEW_FEATURES,
		index: index,
		payload: payload
	}
}

export function addView(payload) {
	return {
		type: ADD_VIEW,
		payload: payload
	}
}

export function currentView(index) {
	return {
		type: CURRENT_VIEW,
		index: index
	}
}
