import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { ErrorRedux } from './Error/Error.redux'
import { HomeRedux } from './Home/Home.redux'
import { MessageRedux } from './Message/Message.redux'
import { SettingsRedux } from './Settings/Settings.redux'
import {  UserR } from './User/User.redux'
import { UsersRedux } from './Users/Users.redux'
import { WebSocketRedux } from './Web_socket/Web_socket.redux'


const allReducers = combineReducers({
    user:UserR,
    error:ErrorRedux,
    home:HomeRedux,
    users:UsersRedux,
    message:MessageRedux,
    ws:WebSocketRedux,
    settings:SettingsRedux


})

const store = createStore(allReducers, applyMiddleware(thunkMiddleware))

window.store = store;


export default store