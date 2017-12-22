import React, { SFC } from 'react'
import { renderRoutes, RouteConfig } from 'react-router-config'
import Header from '../components/Header'
import { fetchCurrentUser } from '../services/UserAPI/userActions'
import { DataRoute } from '../../helpers/UtilTypes';

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
    loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
} as DataRoute