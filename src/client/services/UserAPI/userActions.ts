export const FETCH_CURRENT_USER = 'fetch_current_user';
export const fetchCurrentUser = () => async (dispatch, getState, api) => {
    const res = await api.get('/current_user')

    dispatch({
        type: FETCH_CURRENT_USER,
        payload: res
    })
}