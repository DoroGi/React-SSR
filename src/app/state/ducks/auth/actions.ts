import types from './types'

const fetchCurrentUser: any = () => ({
    type: types.FETCH_CURRENT_USER,
})

export default {
    fetchCurrentUser
}