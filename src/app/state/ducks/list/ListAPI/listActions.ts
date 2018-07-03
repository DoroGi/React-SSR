import { ActionCreator, Action, AxiosResponse } from '@types'
import { FETCH_USERS, FETCH_ADMINS } from '../actions'

export const fetchUsers: ActionCreator = () => async (dispatch, _getState, api) => {
    const res: AxiosResponse = await api.get('/users')
    const action: Action = {
        type: FETCH_USERS,
        payload: res
    }
    dispatch(action)
}

export const fetchAdmins: ActionCreator = () => async (dispatch, _getState, api) => {
    const res: AxiosResponse = await api.get('/admins')
    const action: Action = {
        type: FETCH_ADMINS,
        payload: res
    }
    dispatch(action)
}