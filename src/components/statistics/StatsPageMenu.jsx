import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import $ from 'jquery';
import MainPage from '../main_page/MainPage';
import ReturnStatsPage from './ReturnStatsPage';
import { user_id, show, first_name, sur_name } from '../statistics/Variables';
const StatsPageMenu = () => {
    $(document).ready(function () {
        if (show[0] == 0) {
            $(`.main_menu li:nth-child(${2}) .link`)
                .css({
                    color: '#3A80BA'
                })
        }
    });
    $('body').on('click', '.main_menu .link', function () {
        user_id[0] = 0;
        show[0] = 0;
        $('.main_menu li .link')
            .css({
                color: '#CCCCCC'
            })
        $(this)
            .css({
                color: '#3A80BA'
            })
    });
    const addMenu = () => {
        if (show[0] == 1) {
            return (
                <li>
                    <Link
                        className='link'
                        style={{
                            color: '#3A80BA'
                        }}
                    >
                        {`${first_name[0]}${' '}${sur_name[0]}`}
                    </Link>
                </li>
            )
        }
    }
    return (
        <Router>
            <ul
                className='main_menu'
            >
                <li>
                    <Link
                        className='link'
                        to={'/'}
                    >
                        Main page
                    </Link>
                </li>
                <li>
                    <Link
                        className='link'
                        onClick={ReturnStatsPage}
                        to={'/stats'}
                    >
                        User statistics
                    </Link>
                </li>
                {addMenu()}
            </ul>
            <Route exact path='/' component={MainPage} />
        </Router>
    )
}
export default StatsPageMenu;