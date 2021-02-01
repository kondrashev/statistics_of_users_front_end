export const COUNT_USERS_FETCH_DATA_SUCCESS = 'COUNT_USERS_FETCH_DATA_SUCCESS';

export const countUsersFetchDataSuccess = (count) => {
    return {
        type: COUNT_USERS_FETCH_DATA_SUCCESS,
        count
    }
}
export const countUsersFetchData = (url) => {
    return (dispatch) => {
        fetch(url)
            .then(response => {
                if (response.status == 200) {
                    return response.json();
                } else {
                    return alert('Fail!!!');
                }
            })
            .then(count => dispatch(countUsersFetchDataSuccess(count)))
    }
}