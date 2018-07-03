import React, { SFC } from 'react'
import { renderRoutes, RouteConfig } from 'react-router-config'
import Header from './components/organisms/Header'
import { authOperations } from '@state/ducks/auth'
import { DataRoute } from '@types';

type IProps = { route: RouteConfig }

const App: SFC<IProps> = ({ route }) => {
    return (
        <div>
            <Header />
            {renderRoutes(route.routes)}
        </div>
    )
}

export default {
    component: App,
    loadData: () => authOperations.fetchCurrentUser()
} as DataRoute