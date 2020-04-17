export const ADD_VIEW = 'ADD_VIEW'
export const UPDATE_VIEW = 'UPDATE_VIEW'
export const CURRENT_VIEW = 'CURRENT_VIEW'

export const UPDATE_VIEW_SETTINGS = 'UPDATE_VIEW_SETTINGS'
export const UPDATE_VIEW_FEATURES = 'UPDATE_VIEW_FEATURES'

export const START_FETCHING = 'START_FETCHING'
export const STOP_FETCHING = 'STOP_FETCHING'

export function updateView(index, payload) {
	return {
		type: UPDATE_VIEW,
		index: index,
		payload: payload
	}
}

export function updateViewSettings(index, payload) {
	return {
		type: UPDATE_VIEW_SETTINGS,
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

export function addView(payload = {}) {
	return {
		type: ADD_VIEW,
		payload: {
      name: payload.name ? payload.name : "Default",
      settings: payload.settings ? payload.settings : {
      	"name": "",
        "location": "",
        "startTime": "",
        "endTime": "",
        "magMin": "",
        "magMax": ""
      },
      features: payload.features ? payload.features : {}
    }
	}
}

export function currentView(index) {
	return {
		type: CURRENT_VIEW,
		index: index
	}
}

export const startFetching = () => ({ type: START_FETCHING })
export const stopFetching = () => ({ type: STOP_FETCHING })

export const fetchData = (
  index,
  {
    name,
    location,
    startTime,
    endTime,
    magMin,
    magMax
  }
) => {
  return dispatch => {
    dispatch(startFetching());

    fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson')
    .then( data => data.json() )
    .then( json => {
      const quakes = json.features
      .filter(
        quake => {
          const q = quake.properties

          const isLocation = location ? q.place.includes(location) : true
          const isAfterTime = startTime ? q.time >= Date.parse(startTime) : true
          const isBeforeTime = endTime ? q.time <= Date.parse(endTime) : true
          const isGreaterMag = magMin ? q.mag >= magMin : true
          const isLesserMag = magMax ? q.mag <= magMax : true

          return isLocation && isAfterTime && isBeforeTime && isGreaterMag && isLesserMag
        }
      )
      .map(
        quake => ({
          "id": quake.properties.id,
          "title": quake.properties.title,
          "time": quake.properties.time,
          "mag": quake.properties.mag,
          "coordinates": quake.properties.coordinates
        })
      )
      .reverse()

      dispatch(stopFetching());

      dispatch(
        updateViewFeatures( index, quakes )
      )

    })
  }
}
