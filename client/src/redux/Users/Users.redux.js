import users from "../../api/users"

const D={
    GET_USERS:'GET_USERS',
    SET_PARAMS:'SET_PARAMS'
}


const users_R={
    users:null,
    params:{
        name:''
    }
}


export const UsersRedux=(state=users_R,action)=>{
    switch(action.type){
        case D.GET_USERS:
            return {...state,users:action.all_users}
        case D.SET_PARAMS:
            return {...state,params:action.params}
        default: return state
    }
}



const R_FU_USERS_GET=(all_users)=>({type:D.GET_USERS,all_users})
export const R_FU_USERS_PARAMS_SET=(params)=>({type:D.SET_PARAMS,params})


export const get_users=(params)=>dispatch=>{
    return users.get_users(dispatch,params).then(e=>{
        dispatch(R_FU_USERS_GET(e.data.users))
    })
}