import { combineReducers } from 'redux';
import { usersReducer, adminsReducer } from './ListAPI/listReducer';
import userReducer from './UserAPI/userReducer';

export default combineReducers({
    users: usersReducer,
    user: userReducer,
    admins: adminsReducer
});