export const USERS_FETCH_DATA_SUCCESS = 'USERS_FETCH_DATA_SUCCESS';

export const usersFetchDataSuccess = (users) => {
    return {
        type: USERS_FETCH_DATA_SUCCESS,
        users
    }
}
export const usersFetchData = (url) => {
    return (dispatch) => {
        fetch(url)
            .then(response => {
                if (response.status == 200) {
                    return response.json();
                } else {
                    return alert('Fail!!!');
                }
            })
            .then(users => dispatch(usersFetchDataSuccess(users)))
    }
}