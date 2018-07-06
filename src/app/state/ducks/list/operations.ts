import actions from './actions'
import { AxiosResponse, ActionCreator } from '@types';

const fetchUsers: ActionCreator = () => async (dispatch, _getState, api) => {
    const res: AxiosResponse = await api.get('/users')
    dispatch(actions.fetchUsers(res))
}

const fetchAdmins: ActionCreator = () => async (dispatch, _getState, api) => {
    const res: AxiosResponse = await api.get('/admins')
    dispatch(actions.fetchAdmins(res))
}

export default {
    fetchUsers,
    fetchAdmins
}