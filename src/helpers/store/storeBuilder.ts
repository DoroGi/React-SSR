import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'
import reducers from '../../client/services/reducers'
import { StoreBuilder } from '../allTypes';

const createStoreWithMiddleware: StoreBuilder = req => {
    const axiosInstance = axios.create({
        baseURL: 'http://react-ssr-api.herokuapp.com',
        headers: { cookie: req.get('cookie') || '' }
    })

    return createStore(reducers, {}, applyMiddleware(thunk.withExtraArgument(axiosInstance)))
}

export default createStoreWithMiddleware