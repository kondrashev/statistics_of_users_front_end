import React from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import { usersFetchData } from '../../store/load_users/actions';
import StatsPageFilterDate from './StatsPageFilterDate';
import { user_id, startDate, endDate, first_name, sur_name } from './Variables';
class StatsPageTableUsers extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        $('body').on('click', '.list_users tr', function () {
            user_id[0] = parseInt($(this).find('.id_user').text());
            first_name[0] = $(this).find('.first_name').text();
            sur_name[0] = $(this).find('.sur_name').text();
            $('.users .filter_form')
                .css({
                    animation: 'form_filter_show 1s 1 forwards'
                })
        });
        $('body').on('click', '.filter_form .close', function () {
            $('.users .filter_form')
                .css({
                    animation: 'form_filter_hide 1s 1 forwards'
                })
        });
        if (user_id[0] == 0) {
            this.props.fetchData(`${'https://cors-anywhere.herokuapp.com/'}${`https://bitlabs.herokuapp.com/get/users?page=${0}`}`);
        } else {
            this.props.fetchData(`${'https://cors-anywhere.herokuapp.com/'}${`https://bitlabs.herokuapp.com/get/user/statistics/date?userId=${user_id[0]}&min=${startDate[0]}&max=${endDate[0]}`}`);
        }
    }
    render() {
        const users = this.props.users.map((user, index) => {
            if (index % 2 == 0) {
                return (
                    <tr
                        className='one'
                    >
                        <td
                            className='id_user'
                        >{user.id}</td>
                        <td
                            className='first_name'
                        >{user.firstName}</td>
                        <td
                            className='sur_name'
                        >{user.surName}</td>
                        <td>{user.email}</td>
                        <td>{user.gender}</td>
                        <td>{user.ipAddress}</td>
                        <td>{user.totalClicks}</td>
                        <td>{user.totalPageViews}</td>
                    </tr>)
            } else {
                return (
                    <tr
                        className='two'
                    >
                        <td
                            className='id_user'
                        >{user.id}</td>
                        <td
                            className='first_name'
                        >{user.firstName}</td>
                        <td
                            className='sur_name'
                        >{user.surName}</td>
                        <td>{user.email}</td>
                        <td>{user.gender}</td>
                        <td>{user.ipAddress}</td>
                        <td>{user.totalClicks}</td>
                        <td>{user.totalPageViews}</td>
                    </tr>)
            }
        })
        return (
            <div
                className='users'
            >
                <h
                    className='statistics'
                >
                    Users statistics
                </h>
                <table
                    className='list_users'
                >
                    <tr>
                        <th>Id</th>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>IP address</th>
                        <th>Total clikcs</th>
                        <th>Total page views</th>
                    </tr>
                    {users}
                </table>
                {StatsPageFilterDate()}
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
export default connect(mapStateToProps, mapDispatchToProps)(StatsPageTableUsers);