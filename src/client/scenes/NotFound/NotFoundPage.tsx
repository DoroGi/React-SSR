import React, { SFC } from 'react'
import { Context, DataRoute } from '../../../helpers/UtilTypes'

type IProps = { staticContext: Context }

const NotFoundPage: SFC<IProps> = ({ staticContext = {} as Context }) => {
    staticContext.notFound = true
    return <h1>Ooops, route not found.</h1>
}

export default { component: NotFoundPage } as DataRoute