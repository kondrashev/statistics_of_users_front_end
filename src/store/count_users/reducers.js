import { COUNT_USERS_FETCH_DATA_SUCCESS } from './actions';

export const CountUsersReducer = (state = 0, action) => {
    switch (action.type) {
        case COUNT_USERS_FETCH_DATA_SUCCESS:
            return action.count;
        default:
            return state;
    }
}