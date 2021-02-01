import { combineReducers } from 'redux';
import { UsersReducer } from './load_users/reducers';
import { CountUsersReducer } from './count_users/reducers';

export default combineReducers({
    UsersReducer,
    CountUsersReducer
});