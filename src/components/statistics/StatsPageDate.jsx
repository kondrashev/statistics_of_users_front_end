import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { box, startDate, endDate } from './Variables';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

export default function DatePickers() {
    const classes = useStyles();
    const startDateChange = (event) => {
        box[0] = (event.target.value).split('-');
        startDate[0] = parseInt(box[0][2]);
    }
    const endDateChange = (event) => {
        box[1] = (event.target.value).split('-');
        endDate[0] = parseInt(box[1][2]);
    }
    return (
        <form
            className={classes.container} noValidate
        >
            <TextField
                id="date_one"
                label="Start date"
                type="date"
                defaultValue="2019-10-02"
                className={classes.textField}
                onChange={startDateChange}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <TextField
                id="date_two"
                label="End date"
                type="date"
                defaultValue="2019-10-03"
                className={classes.textField}
                onChange={endDateChange}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </form>
    );
}