import { ActionCreator, Action, AxiosResponse } from '../../../helpers/allTypes'
import { FETCH_CURRENT_USER } from '../actions'

export const fetchCurrentUser: ActionCreator = () => async (dispatch, getState, api) => {
    const res: AxiosResponse = await api.get('/current_user')
    const action: Action = {
        type: FETCH_CURRENT_USER,
        payload: res
    }
    dispatch(action)
}