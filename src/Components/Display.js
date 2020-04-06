import React from 'react'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
		margin: theme.spacing(2),
    height: 500,
  }
}));

const Display = ({data}) => {

	const classes = useStyles();

	return (
		<Paper className={classes.root}>
			<svg id="display"/>
		</Paper>
	)
}

export default Display
