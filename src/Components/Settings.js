import React from 'react'

const Settings = ({onUpdateSettings}) => {
	return (
		<div className="settings">
			<form>
				<h2>Earthquake Settings</h2>
				<div>
					<label htmlFor="location">Location:</label>
					<input type="text" name="location" id="location"/>
				</div>
				<div>
					<h3>Timeframe</h3>
					<label htmlFor="startTime">Start:</label>
					<input type="text" name="startTime" id="startTime"/>
					<label htmlFor="endTime">End:</label>
					<input type="text" name="endTime" id="endTime"/>
				</div>
				<div>
					<h3>Magnitude</h3>
					<label htmlFor="minimumMagnitude">Min:</label>
					<input type="text" name="minimumMagnitude" id="minimumMagnitude"/>
					<label htmlFor="maximumMagnitude">Max:</label>
					<input type="text" name="maximumMagnitude" id="maximumMagnitude"/>
				</div>
				<div>
					<input type="submit" value="Update" onClick={onUpdateSettings}/>
				</div>
			</form>
		</div>
	)
}

export default Settings
