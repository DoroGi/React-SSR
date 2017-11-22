export const FETCH_USERS = 'fetch_users';
export const fetchUsers = () => async (dispatch, getState, api) => {
    const res = await api.get('/users');

    dispatch({
        type: FETCH_USERS,
        payload: res
    });
};

export const FETCH_ADMINS = 'fetch_admins';
export const fetchAdmins = () => async (dispatch, getState, api) => {
    const res = await api.get('/admins');

    dispatch({
        type: FETCH_ADMINS,
        payload: res
    });
};