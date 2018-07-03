import actions from './actions'
import { AxiosResponse, ActionCreator } from '@types';

const fetchCurrentUser: ActionCreator = () => (dispatch, _getState, api) => {
    api.get('/current_user')
        .then((res: AxiosResponse) => dispatch(actions.fetchCurrentUser(res)))
        .catch(() => console.log('ERROR DURING FETCHUSER!!!'))
}

export default {
    fetchCurrentUser
}