import express from 'express'
import compression from 'compression'
import { matchRoutes } from 'react-router-config'
import proxy, { Config } from 'http-proxy-middleware'
import routes from '@routes'
import { createStore } from '@state/store'
import { Context, Store, IStoreState, Dispatch, DataRoute } from '@types'
import renderer from './renderer'

const proxyToHeroku: Config = { 
    target: 'http://react-ssr-api.herokuapp.com',
    changeOrigin: true,
    onProxyReq: proxyReq => { proxyReq.setHeader('x-forwarded-host', 'localhost:3000') },
    pathRewrite: { '^/api':'' },
}

const prefetchAllData = (path: string, dispatch: Dispatch ) => {
    const promises =
        matchRoutes(routes, path)
            .map(({route}) => (<DataRoute> route).loadData)
            .filter((prefetch: Function | undefined): prefetch is Function => prefetch !== undefined)
            .map(prefetch => new Promise((resolve: Function) => dispatch(prefetch()).then(resolve).catch(resolve)))
    return Promise.all(promises)
}

const app = express()
app.use(compression())
app.use(express.static('assets'))
app.use('/api', proxy('/api', proxyToHeroku))
app.get('*', (req: express.Request, res: express.Response) => {
    const store = createStore(req) as Store<IStoreState>
    prefetchAllData(req.path, store.dispatch)
    .then(() => {
        const context: Context = {}
        const content = renderer(req, store, context) 
               
        if (context.url) return res.redirect(301, context.url)
        if (context.notFound) res.status(404)
        res.send(content)
    })
    .catch((err)=> console.log(err))
})
app.listen(3000, () => console.log('Listening on port 3000'))