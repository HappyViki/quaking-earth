import React from 'react'
import { connect } from 'react-redux'
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
		margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
	field: {
		'margin-bottom': theme.spacing(2),
	}
}));

const Settings = ({onUpdateSettings, location, startTime, endTime, magMin, magMax}) => {

	const classes = useStyles();

	return (
		<Paper className={classes.root}>
			<form onSubmit={onUpdateSettings}>
				<h2>Earthquake Settings</h2>
				<TextField
					id="location"
					className={classes.field}
					label="Location"
					defaultValue={location}
				/>
				<br/>
				<TextField
					id="startTime"
					className={classes.field}
					label="Start Time"
					type="date"
					defaultValue={startTime}
				/>
				<br/>
				<TextField
					id="endTime"
					className={classes.field}
					label="End Time"
					type="date"
					defaultValue={endTime}
				/>
				<br/>
				<TextField
					id="magMin"
					className={classes.field}
					label="Minimum Magnitude"
					defaultValue={magMin}
				/>
				<TextField
					id="magMax"
					className={classes.field}
					label="Maximum Magnitude"
					defaultValue={magMax}
				/>
				<br/>
				<Button
					variant="contained"
					type="submit"
					startIcon={<SaveIcon />}
				>
				Update
				</Button>
			</form>
		</Paper>
	)
}

const mapStateToProps = state => {
  if (!state.data.length) return {}
  const settings = state.data[state.currentIndex].settings
	return {
		location: settings.location,
    startTime: settings.startTime,
    endTime: settings.endTime,
    magMin: settings.magMin,
    magMax: settings.magMax
	};
};

export default connect(mapStateToProps)(Settings)
