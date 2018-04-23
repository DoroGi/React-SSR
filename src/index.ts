import express from 'express'
import compression from 'compression'
import { matchRoutes, MatchedRoute } from 'react-router-config'
import proxy from 'express-http-proxy'
import Routes from './client/Routes'
import { createStore } from './helpers'
import { Context, DataRoute, Store, IStoreState } from '@types'
import renderer from './renderer'

const proxyOptions = {
    proxyReqOptDecorator(opts: any) {
        opts.headers['x-forwarded-host'] = 'localhost:3000'
        return opts
    }
}

type DataFetcher = (store: Store<IStoreState>) => (route: MatchedRoute<{}>) => any
const getPrefetchFunctions: DataFetcher = (store) => ({ route }) => {
    const dataRoute = <DataRoute>route
    return dataRoute.loadData ? dataRoute.loadData(store) : null
}

type PromiseFilter = (promise: Promise<{}>) => boolean
const componentThatDoesNotNeedData: PromiseFilter = promise => promise!==null

type PromiseWrapper = (promise: Promise<{}>) => Promise<{}>
const wrapAllPromisesInAPromise: PromiseWrapper = promise => new Promise(resolve => { promise.then(resolve).catch(resolve)})

type PromiseGetter = (req: express.Request, store: Store<IStoreState>) => Promise<{}>[]
const getDataPromises: PromiseGetter = (req, store) =>
    matchRoutes(Routes, req.path)
    .map(getPrefetchFunctions(store))
    .filter(componentThatDoesNotNeedData)
    .map(wrapAllPromisesInAPromise)

const handleRequestWithReactRouter = (req: express.Request, res: express.Response) => {
    const store = createStore(req) as Store<IStoreState>
    const dataPromises = getDataPromises(req, store)

    Promise.all(dataPromises).then(() => {
        const context: Context = {}
        const content = renderer(req, store, context) 
               
        if (context.url) return res.redirect(301, context.url)
        if (context.notFound) res.status(404)
        res.send(content)
    })
}

const app = express()
app.use(compression())
app.use(express.static('assets'))
app.use('/api', proxy('http://react-ssr-api.herokuapp.com', proxyOptions))
app.get('*', handleRequestWithReactRouter)
app.listen(3000, () => console.log('Listening on port 3000'))