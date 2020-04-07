import React from 'react'
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

const Settings = ({onUpdateSettings}) => {

	const classes = useStyles();

	return (
		<Paper className={classes.root}>
			<form onSubmit={onUpdateSettings}>
				<h2>Earthquake Settings</h2>
				<TextField
					id="location"
					className={classes.field}
					label="Location"
					defaultValue="Magna, Utah"
				/>
				<br/>
				<TextField
					id="startTime"
					className={classes.field}
					label="Start Time"
					type="date"
					defaultValue="2020-03-18"
				/>
				<br/>
				<TextField
					id="endTime"
					className={classes.field}
					label="End Time"
					type="date"
					defaultValue="2020-03-24"
				/>
				<br/>
				<TextField
					id="magMin"
					className={classes.field}
					label="Minimum Magnitude"
					defaultValue="3.5"
				/>
				<TextField
					id="magMax"
					className={classes.field}
					label="Maximum Magnitude"
					defaultValue="5.7"
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

export default Settings
