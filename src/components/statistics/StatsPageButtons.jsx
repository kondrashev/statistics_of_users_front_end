import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import StatsPage from './StatsPage';
import { show } from './Variables';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PersonalPage from '../personal_page/PersonalPage';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function OutlinedButtons() {
    const classes = useStyles();
    const mainMenu = () => {
        show[0] = 1;
    }
    return (
        <Router>
            <div className={classes.root}>
                <Button
                    className='filter'
                    onClick={StatsPage}
                >
                    Filter date
                </Button>
                <Button
                    className='filter'
                    onClick={mainMenu}
                >
                    <Link
                        className='link_personal'
                        to={'/personal/page'}
                    >
                        Diagram
                    </Link>
                </Button>
            </div>
            <Route exact path='/personal/page' component={PersonalPage} />
        </Router>
    );
}