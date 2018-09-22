import actions from './actions'
import { AxiosResponse, ActionCreator } from '@types';

const fetchCurrentUser: ActionCreator = () => async (dispatch, _getState, api) => {
    const res: AxiosResponse = await api.get('/current_user')
    dispatch(actions.fetchCurrentUser(res))
}

export default {
    fetchCurrentUser
}
