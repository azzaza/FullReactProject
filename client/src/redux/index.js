import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { ErrorRedux } from './Error/Error.redux'
import { HomeRedux } from './Home/Home.redux'
import { Log_inRedux } from './Log_in/Log_in.redux'
import { MessageRedux } from './Message/Message.redux'
import {  UserR } from './User/User.redux'
import { UsersRedux } from './Users/Users.redux'


const allReducers = combineReducers({
    user:UserR,
    error:ErrorRedux,
    home:HomeRedux,
    users:UsersRedux,
    message:MessageRedux
    // log_in:Log_inRedux,
    

})

const store = createStore(allReducers, applyMiddleware(thunkMiddleware))

window.store = store;


export default store