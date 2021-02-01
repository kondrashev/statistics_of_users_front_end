import React from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import { countUsersFetchData } from '../../store/count_users/actions';
import { usersFetchData } from '../../store/load_users/actions';
import { usersCount, page, user_id } from '../statistics/Variables';
class StatsPageFooter extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchData(`${'https://cors-anywhere.herokuapp.com/'}${`https://bitlabs.herokuapp.com/count`}`);
        $('body').on('click', '.stats_page_footer .arrowMinus', function () {
            $('.stats_page_footer .arrowPlus path')
                .css({
                    stroke: '#F1F1F1'
                })
            $(this).find('path')
                .css({
                    stroke: '#3A80BA'
                })
        });
        $('body').on('click', '.stats_page_footer .arrowPlus', function () {
            $('.stats_page_footer .arrowMinus path')
                .css({
                    stroke: '#F1F1F1'
                })
            $(this).find('path')
                .css({
                    stroke: '#3A80BA'
                })
        });
        $('body').on('mouseover', '.navigation .navigationButton', function () {
            $(this)
                .css({
                    boxShadow: '0 0 3px grey'
                })
        });
        $('body').on('mouseout', '.navigation .navigationButton', function () {
            $(this)
                .css({
                    boxShadow: 'initial'
                })
        });
        $('body').on('click', '.navigation .navigationButton', function () {
            $('.navigation .navigationButton')
                .css({
                    background: 'initial',
                    color: 'initial'
                })
            $(this)
                .css({
                    background: '#3A80BA',
                    color: '#ffffff'
                })
            page[0] = parseInt($(this).text()) - 1;
            user_id[0] = 0;
        });
        $('body').on('click', '.stats_page_footer .arrowMinus', function () {
            let sum = 0;
            $('.navigation .navigationButton').each(function () {
                sum += parseInt($(this).text());
                $('.navigation .navigationButton')
                    .css({
                        background: 'initial',
                        color: 'initial'
                    })
            });
            if (sum == 15) {
                $('.stats_page_footer .arrowMinus path')
                    .css({
                        stroke: '#F1F1F1'
                    })
                return;
            }
            $('.navigation .navigationButton').each(function () {
                $(this).text(parseInt($(this).text()) - 1);
            });
        });
        $('body').on('click', '.stats_page_footer .arrowPlus', function () {
            let stopNext = [];
            let start = usersCount[0] / 50;
            for (let i = 0; i < 5; i++) {
                stopNext.push(start--);
            }
            let rangeNavigation = stopNext.reduce((total, amount) => total + amount);
            let sum = 0;
            $('.navigation .navigationButton').each(function () {
                sum += parseInt($(this).text());
                $('.navigation .navigationButton')
                    .css({
                        background: 'initial',
                        color: 'initial'
                    })
            });
            if (sum == rangeNavigation) {
                $('.stats_page_footer .arrowPlus path')
                    .css({
                        stroke: '#F1F1F1'
                    })
                return;
            }
            $('.navigation .navigationButton').each(function () {
                $(this).text(parseInt($(this).text()) + 1);
            });
        });
    }
    render() {
        const navigationUsers = () => {
            if (page[0] != undefined) {
                this.props.fetchNavigation(`${'https://cors-anywhere.herokuapp.com/'}${`https://bitlabs.herokuapp.com/get/users?page=${page[0]}`}`);
            }
        }
        usersCount[0] = this.props.countUsers;
        let buttons = [];
        for (let i = 1; i < 6; i++) {
            buttons.push(
                <div
                    className='navigationButton'
                >{i}</div>
            )
        }
        return (
            <div
                className='stats_page_footer'
            >
                <div
                    className='navigation'
                    onClick={navigationUsers}
                >
                    <div
                        className='arrowMinus'
                    >
                        <svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 2L3 14L15 26" stroke="#F1F1F1" stroke-width="4" stroke-linecap="round" />
                        </svg>
                    </div>
                    {buttons}
                    <div
                        className='arrowPlus'
                    >
                        <svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 2L14 14L2 26" stroke="#3A80BA" stroke-width="4" stroke-linecap="round" />
                        </svg>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        countUsers: state.CountUsersReducer
    };
}
const mapDispatchToProps = dispatch => {
    return {
        fetchData: url => dispatch(countUsersFetchData(url)),
        fetchNavigation: url => dispatch(usersFetchData(url))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(StatsPageFooter);