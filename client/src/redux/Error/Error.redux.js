import { User_Token } from "../../Components/Local/Local"

const bodyError = {
    message : '',
    code : 400
}

const D={
    SET_ERROR:'SET_ERROR'
}



export const ErrorRedux=(state=false,action)=>{
    switch(action.type){
        case(D.SET_ERROR):return action.data

        default:return state
    }
}


export const R_FU_ERROR_SET=(message,code,is_open)=>{

    if(message=='token not life'){
        User_Token.set(null)
        return {type:D.SET_ERROR,data:false}
    }

    
   return {type:D.SET_ERROR,data:{message,code,is_open}}
}
