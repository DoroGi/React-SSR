import express from 'express'
import { matchRoutes } from 'react-router-config'
import proxy from 'express-http-proxy'
import Routes from './client/Routes'
import { createStore } from './helpers'
import { Context, DataRoute, Store, IStoreState } from './helpers/allTypes'
import renderer from './renderer'

const app = express()

app.use(
    '/api',
    proxy('http://react-ssr-api.herokuapp.com', {
        proxyReqOptDecorator(opts) {
            opts.headers['x-forwarded-host'] = 'localhost:3000'
            return opts
        } //ignore this proxy setting, it's just to make this specific API work.
    })
)

app.use(express.static('assets')) //assets is accessible from the outside, here the client will get the client bundle!
app.get('*', (req, res) => {
    const store = createStore(req) as Store<IStoreState>
    
    const dataPromises: Array<Promise<{}>> = matchRoutes(Routes, req.path)
    .map(({ route }) => {
        const dataRoute = <DataRoute>route
        return dataRoute.loadData ? dataRoute.loadData(store) : null
    })
    .filter(promise => promise!==null)
    .map(promise => new Promise((resolve, reject) => { promise.then(resolve).catch(resolve)}))

    Promise.all(dataPromises).then(() => {
        const context: Context = {}
        const content = renderer(req, store, context)

        if (context.url) return res.redirect(301, context.url)
        if (context.notFound) res.status(404)
        res.send(content)
    })
})

app.listen(3000, () => console.log('Listening on port 3000'))