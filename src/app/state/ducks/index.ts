import list from './list'
import auth from './auth'
import { combineReducers } from 'redux';

export default combineReducers({...list, ...auth})