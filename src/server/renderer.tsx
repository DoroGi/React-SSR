import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import serialize from 'serialize-javascript'
import { Helmet } from 'react-helmet'
import Routes from '@routes'
import IStoreState from '@state/store/IStoreState'
import { Context, Request, Store } from '@types'

type RendererType = (req: Request, store: Store<IStoreState>, context: Context) => string

const renderer: RendererType = ({ path }, store, context) => {
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={path} context={context}> 
                <div>{renderRoutes(Routes)}</div>
            </StaticRouter>
        </Provider>
    )
    
    const helmet = Helmet.renderStatic()

    return `
    <html>
        <head>
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
            <link rel="stylesheet" href="client.css">
        </head>
        <body>
            <div id="root">${content}</div>
            <script>
                window.INITIAL_STATE = ${serialize(store.getState())}
            </script>
            <script src="vendor.js"></script>            
            <script src="client.js"></script>
        </body>
    </html>
    `
}

export default renderer