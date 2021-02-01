import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import $ from 'jquery';
import { user_id } from '../statistics/Variables';
import StatsPage from '../statistics/StatsPage';
class MainPageHeader extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        $('body').on('click', '.main_page_header .view_stats', function () {
            user_id[0] = 0;
        });
    }
    render() {
        return (
            <Router>
                <div
                    className='main_page_header'
                >
                    <h
                        className='app_co'
                    >
                        AppCo
                    </h>
                    <h
                        className='brain'
                    >
                        Brainstorming <b>for desired perfect Usability</b>
                    </h>
                    <h
                        className='design'
                    >
                        Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!
                    </h>
                    <button
                        className='view_stats'
                    >
                        <Link
                            to={'/stats'}
                            className='link_stats'
                        >
                            View Stats
                        </Link>
                    </button>
                    <div
                        className='mobile'
                    >
                    </div>
                </div>
                <Route exact path='/stats' component={StatsPage} />
            </Router>
        )
    }
}
export default MainPageHeader;