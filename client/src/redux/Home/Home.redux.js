import home from "../../api/home"


const D={
    SET_USER:'SET_USER'
}

const home_user={
    email : '',
    name : '',
    status:''
}

export const HomeRedux=(state=home_user,action)=>{
    switch(action.type){
        case D.SET_USER:
            const {email,status,name,page_name,isAdmin,avatar,_id} = action.home_user
            
            return {email,status,name,page_name,isAdmin,avatar,_id}
        default:return state
    }
}




const R_FU_HOME_SET=(home_user)=>({type:D.SET_USER,home_user})


export const get_home=(id)=>dispatch=>{

    return home.get_home(id,dispatch)
    .then(e=>{

        dispatch(R_FU_HOME_SET(e.data.user))
    })
}