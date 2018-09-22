import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'
import rootReducer from '@state/ducks'
import { StoreBuilder } from '@types';

const createStoreWithMiddleware: StoreBuilder = req => {
    const axiosInstance = axios.create({
        baseURL: 'http://react-ssr-api.herokuapp.com',
        headers: { cookie: req.get('cookie') || '' }
    })
    return createStore(rootReducer, {}, applyMiddleware(thunk.withExtraArgument(axiosInstance)))
}

export default createStoreWithMiddleware
