import React from 'react';
import App from './App';
import HomePage from './scenes/Home/HomePage';
import UsersListPage from './scenes/UsersList/UsersListPage';
import NotFoundPage from './scenes/NotFound/NotFoundPage';
import AdminsListPage from './scenes/AdminsList/AdminsListPage';

export default [
    {
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
    }  
];