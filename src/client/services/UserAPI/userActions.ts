import { ActionCreator, Action } from '../../../helpers/UtilTypes'
import { FETCH_CURRENT_USER } from '../actions'
import { AxiosResponse } from 'axios'

export const fetchCurrentUser: ActionCreator = () => async (dispatch, getState, api) => {
    const res: AxiosResponse = await api.get('/current_user')
    const action: Action = {
        type: FETCH_CURRENT_USER,
        payload: res
    }
    dispatch(action)
}