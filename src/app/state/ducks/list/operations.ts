import actions from './actions'
import { AxiosResponse, ActionCreator } from '@types';

const fetchUsers: ActionCreator = () => (dispatch, _getState, api) => {
    api.get('/users')
        .then((res: AxiosResponse) => dispatch(actions.fetchUsers(res)))
        .catch(() => console.log('ERROR DURING FETCHUSERS!!!'))
}

const fetchAdmins: ActionCreator = () => (dispatch, _getState, api) => {
    api.get('/admins')
        .then((res: AxiosResponse) => dispatch(actions.fetchAdmins(res)))
        .catch(() => console.log('ERROR DURING FETCHADMINS!!!'))
}

export default {
    fetchUsers,
    fetchAdmins
}