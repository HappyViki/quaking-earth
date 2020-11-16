import {
  startFetching,
	stopFetching,
	updatePanelFeatures
} from './actions'

const fetchData = (
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
        updatePanelFeatures( index, quakes )
      )

    })
  }
}

export default fetchData
