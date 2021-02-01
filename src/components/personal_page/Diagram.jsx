import React from 'react';
import { connect } from 'react-redux';
import { usersFetchData } from '../../store/load_users/actions';
import { user_id, startDate, endDate, first_name, sur_name } from '../statistics/Variables';
import { Line } from 'react-chartjs-2';

class Diagram extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchData(`${'https://cors-anywhere.herokuapp.com/'}${`https://bitlabs.herokuapp.com/get/user/statistics/date?userId=${user_id[0]}&min=${startDate[0]}&max=${endDate[0]}`}`);
    }
    render() {
        const date = [];
        const clicks = [];
        const views = [];
        const circle = [];
        Object.entries(this.props.users).map(([key, value]) => {
            if (key == 0 || key == this.props.users.length - 1) {
                circle.push(8);
            } else {
                circle.push(0);
            }
            date.push(value.date);
        });
        Object.entries(this.props.users).map(([, value]) => {
            clicks.push(value.totalClicks);
        });
        Object.entries(this.props.users).map(([, value]) => {
            views.push(value.totalPageViews);
        });
        return (
            <div
                className='diagram_places'
            >
                <div
                    className='diagram_place_one'
                >
                    <h
                        className='user_name'
                    >
                        {`${first_name[0]}${' '}${sur_name[0]}`}
                    </h>
                    <h
                        className='clicks'
                    >
                        Clicks
                    </h>
                    <div
                        className='chart_one'
                    >
                        <Line
                            style={{
                                position: 'absolute',
                                top: '50px',
                                left: '0px'
                            }}
                            options={{
                                responsive: true,
                                legend: {
                                    display: false
                                },
                                scales: {
                                    xAxes: [{
                                        gridLines: {
                                            display: true,
                                            color: '#CCCCCC'
                                        },
                                        ticks: {
                                            fontFamily: 'Montserrat',
                                            fontSize: 16,
                                            fontColor: '#1A1A1A'
                                        }
                                    }],
                                    yAxes: [{
                                        gridLines: {
                                            display: true,
                                            color: '#CCCCCC'
                                        },
                                        ticks: {
                                            fontFamily: 'Montserrat',
                                            fontSize: 16,
                                            fontColor: '#1A1A1A'
                                        }
                                    }]
                                }
                            }}
                            data={{
                                labels: date,
                                datasets: [
                                    {
                                        borderColor: '#3A80BA',
                                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                                        borderWidth: '5',
                                        pointBackgroundColor: '#3A80BA',
                                        radius: circle,
                                        data: clicks
                                    }
                                ]
                            }}
                        />
                    </div>
                </div>
                <div
                    className='diagram_place_two'
                >
                    <h
                        className='views'
                    >
                        Views
                    </h>
                    <div
                        className='chart_two'
                    >
                        <Line
                            style={{
                                position: 'absolute',
                                top: '50px',
                                left: '0px'
                            }}
                            options={{
                                responsive: true,
                                legend: {
                                    display: false
                                },
                                scales: {
                                    xAxes: [{
                                        gridLines: {
                                            display: true,
                                            color: '#CCCCCC'
                                        },
                                        ticks: {
                                            fontFamily: 'Montserrat',
                                            fontSize: 16,
                                            fontColor: '#1A1A1A'
                                        }
                                    }],
                                    yAxes: [{
                                        gridLines: {
                                            display: true,
                                            color: '#CCCCCC'
                                        },
                                        ticks: {
                                            fontFamily: 'Montserrat',
                                            fontSize: 16,
                                            fontColor: '#1A1A1A'
                                        }
                                    }]
                                }
                            }}
                            data={{
                                labels: date,
                                datasets: [
                                    {
                                        borderColor: '#3A80BA',
                                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                                        borderWidth: '5',
                                        pointBackgroundColor: '#3A80BA',
                                        radius: circle,
                                        data: views
                                    }
                                ]
                            }}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        users: state.UsersReducer
    };
}
const mapDispatchToProps = dispatch => {
    return {
        fetchData: url => dispatch(usersFetchData(url))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Diagram);