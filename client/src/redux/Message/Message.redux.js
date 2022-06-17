import { M_userApi } from "../../api/message"



const D={
    GET_MESSAGE:'GET_MESSAGE',
    GET_USERS_M:'GET_USERS_M'
}



export const MessageRedux=(state=[],action)=>{
    switch(action.type){
        case D.GET_MESSAGE:
            return state
        case D. GET_USERS_M:
            return action.users
        default :return state
    }
}

const R_FU_MESSAGE_GET_USERS=(users)=>({type:D. GET_USERS_M,users})


export const get_message=(id)=>dispatch=>{
    return M_userApi.get_message(id,dispatch)
    .then(e=>{
        console.log(e);
    })
}

export const create_chat=(id)=>dispatch=>{
    return M_userApi.create(id,dispatch)
    .then(e=>{
        console.log(e);
    })
}

export const get_users_message=()=>dispatch=>{
    return M_userApi.get_users(dispatch)
    .then(e=>{
        // console.log(e.data.messages);
        dispatch(R_FU_MESSAGE_GET_USERS(e.data.messages))
    })
}

export const send_message=(data)=>dispatch=>{
    return M_userApi.send_message(data,dispatch)
    .then(e=>{
        console.log(e.data);
        // dispatch(R_FU_MESSAGE_GET_USERS(e.data.messages))
    })
}