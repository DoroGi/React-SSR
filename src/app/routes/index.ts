import App from '../App'
import HomePage from '../components/pages/Home/HomePage'
import UsersListPage from '../components/pages/UsersList/UsersListPage'
import NotFoundPage from '../components/pages/NotFound/NotFoundPage'
import AdminsListPage from '../components/pages/AdminsList/AdminsListPage'
import { DataRoute } from '@types'

export default [{
    ...App,
    routes: [
        {
            ...HomePage,
            path: '/',
            exact: true
        },
        {
            ...AdminsListPage,            
            path: '/admins'
        },
        {
            ...UsersListPage,            
            path: '/users'
        },
        {
            ...NotFoundPage
        }
    ]
}] as DataRoute[]