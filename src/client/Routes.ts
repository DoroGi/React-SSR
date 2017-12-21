import React from 'react'
import App from './scenes/App'
import HomePage from './scenes/Home/HomePage'
import UsersListPage from './scenes/UsersList/UsersListPage'
import NotFoundPage from './scenes/NotFound/NotFoundPage'
import AdminsListPage from './scenes/AdminsList/AdminsListPage'
import { DataRoute } from '../helpers/UtilTypes';

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