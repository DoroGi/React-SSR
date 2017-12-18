import React from 'react';
import App from './App';
import HomePage from './scenes/Home/HomePage';
import UsersListPage from './scenes/UsersList/UsersListPage';
import NotFoundPage from './scenes/NotFound/NotFoundPage';
import AdminsListPage from './scenes/AdminsList/AdminsListPage';

export default [{
    component: App,
    routes: [
        {
            path: '/',
            exact: true,
            component: HomePage
        },
        {
            path: '/admins',            
            component: AdminsListPage
        },
        {
            path: '/users',            
            component: UsersListPage
        },
        {
            component: NotFoundPage
        }
    ]
}]