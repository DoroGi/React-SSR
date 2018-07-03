import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'
import reducers from '@state/ducks/list/reducers'
import { StoreBuilder } from '@types';

const createStoreWithMiddleware: StoreBuilder = req => {
    const axiosInstance = axios.create({
        baseURL: 'http://react-ssr-api.herokuapp.com',
        headers: { cookie: req.get('cookie') || '' }
    })

    return createStore(reducers, {}, applyMiddleware(thunk.withExtraArgument(axiosInstance)))
}

export default createStoreWithMiddleware