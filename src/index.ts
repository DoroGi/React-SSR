import express from 'express'
import { matchRoutes } from 'react-router-config'
import proxy from 'express-http-proxy'
import Routes from './client/Routes'
import { renderer, createStore, fetchComponentData, matchRouteComponents } from './helpers'

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
app.use(express.static('public')) //public is accessible from the outside, here the client will get the client bundle!
app.get('*', (req, res) => {
    const store = createStore(req)
    const components = matchRouteComponents(req.path, Routes)
    
    fetchComponentData(store.dispatch, components).then(() => {
        const HTML = renderer(req.path, store, Routes)
        res.type("text/html; charset=UTF-8")
        res.end(HTML)
    })
})

app.listen(3000, () => console.log('Listening on port 3000'))