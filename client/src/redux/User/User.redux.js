import reg_log from "../../api/reg_log";
import  { change_U_userApi, U_userApi } from "../../api/user";
import { User_Token } from "../../Components/Local/Local";
import { change_M_userApi } from "../../api/message";

import {  R_FU_SOKET_ID } from "../Web_socket/Web_socket.redux";

const D = {
    LOG_IN: 'LOG_IN',
    LOG_OUT: 'LOG_OUT'


}



const user = null;
// ? IF NULL = 
export const UserR = (state = user, action) => {
    switch (action.type) {
        case D.LOG_IN:
            const { email, _id, name,  page_name } = action.data

            return { email, _id, name,  page_name }
        case D.LOG_OUT:
            return null
        default: return state
    }
}


const R_FU_USER_LOG_IN = (data) => ({ type: D.LOG_IN, data })
export const R_FU_USER_LOG_OUt = () => ({ type: D.LOG_OUT })


export const registration = (data) => dispatch => {
    return reg_log.registration(data, dispatch)
}

export const log_in = (data) => dispatch => {
    return reg_log.log_in(data, dispatch)
        .then(e => {
            User_Token.set(e.data.jwtToken) 
            
            
        
            change_U_userApi(e.data.jwtToken, e.data.user._id)
            change_M_userApi(e.data.jwtToken, e.data.user._id)
            dispatch(R_FU_SOKET_ID(e.data.user._id,dispatch))

            dispatch(R_FU_USER_LOG_IN(e.data.user))
        })
}


export const autorisation = () => dispatch => {

    User_Token.get()
        .then(token => {
            if (!token) return
            return reg_log.autorisation(token, dispatch)
                .then(e => {
                    change_U_userApi(token, e.data.user._id)
                    change_M_userApi(token, e.data.user._id)
                    dispatch(R_FU_SOKET_ID(e.data.user._id,dispatch))

                    dispatch(R_FU_USER_LOG_IN(e.data.user))

                })

        })

}

export const update_data=(data)=>dispatch=>{
    U_userApi.settings(data,dispatch).then(e=>{
        console.log(e);
    })
} 



export const update_password=(data)=>dispatch=>{
    U_userApi.password(data,dispatch).then(e=>{
        console.log(e);
    })
}