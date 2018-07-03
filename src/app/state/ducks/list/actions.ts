import { AxiosResponse } from '@types'
import types from './types'

const fetchUsers: any = (res: AxiosResponse) => ({
    type: types.FETCH_USERS,
    payload: res
})

const fetchAdmins: any = (res: AxiosResponse) => ({
    type: types.FETCH_ADMINS,
    payload: res
})

export default {
    fetchUsers,
    fetchAdmins
}