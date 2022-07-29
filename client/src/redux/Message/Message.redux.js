import { M_userApi } from "../../api/message"
import { v4 as id } from 'uuid';
import { R_FU_SOKET_SEND_MESSAGE } from "../Web_socket/Web_socket.redux";
import debounce from "lodash.debounce";



const D = {
    GET_MESSAGE: 'GET_MESSAGE',
    GET_USERS_M: 'GET_USERS_M',
    SOKET_ADD:'SOKET_ADD',
    SAVE_TEXT:'SAVE_TEXT',
    CREATE_CHAT:'CREATE_CHAT'
}
const m = {
    '_idasdas' : {},

}



const state = [
        {},
        {},
]
    // isFirst : true


export const MessageRedux = (state = [], action) => {
    

    // console.log(action);
    switch (action.type) {
        case D.SAVE_TEXT:
            const state_map= state.map(e=>{
                if(e.page_name==action.data._id){
                    // console.log(e);
                    e.textMessage=action.data.text
                }
                return e
            })
            // console.log(state_map);
            return state_map
        case D.GET_MESSAGE:

            const user=state.find(e=>e._id==action.messages._id)
            user.message=action.messages.message

            // user.textMessage = action,me/
            const filter_st=state.filter(e=>e._id!=action.messages._id)
            filter_st.push(user)
            return filter_st
        case D.GET_USERS_M:
            return action.users.reverse()
        case D.CREATE_CHAT:
            // state.push(action.chat)
            // const state1= state
            return [action.chat,...state]       
        case D.SOKET_ADD :
            const s=state.map(i=>{
                if(i._id===action.data.id){
                    // console.log(i.message);
                    i.message.push(action.data.message)
                }
                return i
            })
            // console.log(s);
            return s 
        default: return state

    }
}

const R_FU_MESSAGE_GET_USERS = (users) => ({ type: D.GET_USERS_M, users })
const R_FU_MESSAGE_CREATE_CHAT=(chat)=>({type:D.CREATE_CHAT,chat})
export const R_FU_MESSAGE_GET_MESSAGE=(messages)=>({type:D.GET_MESSAGE,messages})
export const R_FU_MESSAGE_SAVE_TEXT=(data)=>({type:D.SAVE_TEXT,data})


export const get_message = (id) => dispatch => {
    return M_userApi.get_message(id, dispatch)
        .then(e => {
            // console.log(e);
            dispatch(R_FU_MESSAGE_GET_MESSAGE(e.data.chat))
        })
}

export const create_chat = (id) => dispatch => {
    return M_userApi.create(id, dispatch)
        .then(e=>{
            dispatch(R_FU_MESSAGE_CREATE_CHAT(e.data.chat))
            return e
        })
}

const post_id = (data) => dispatch => {
    // console.log(data);
    return M_userApi.post_id(data, dispatch)
       
}

export const get_users_message = () => dispatch => {
    return M_userApi.get_users(dispatch)
        .then(e => { 
            // console.log(e.data);
            const arr_id = e.data.messages.map(e => e._id)
           return post_id(arr_id)(dispatch)
            .then(respons=>{
                // console.log(respons);
                const allMessage = e.data.messages.map((el,id)=>{
                    
                    el.name=respons.data.users[id].name
                    el.page_name=respons.data.users[id].page_name
                    return el
                })
                dispatch(R_FU_MESSAGE_GET_USERS(allMessage))
            })
            // dispatch(post_id(arr_id)).then(el=>{
            //      dispatch(R_FU_MESSAGE_GET_USERS(el))
            // })
            // console.log(arr_id);
               
            
            // .then(el=>{
            //     console.log(el);
            // })
            // dispatch(R_FU_MESSAGE_GET_USERS(e.data.messages))
        })
}

export const send_message = (data) => dispatch => {
    return M_userApi.send_message({...data,messageID: id()}, dispatch)
        .then(e => {
           
            dispatch(R_FU_SOKET_SEND_MESSAGE({my_id:e.data.my_id,another_id:e.data.another_id}))
           
        })
}

export const remove=(_id)=>dispatch=>{
    return M_userApi.remove(_id,dispatch)
    .then(e=>{
        // console.log(e);
    })

}
export const save_text=(data)=>{
    return M_userApi.save_text(data)
    
}
// export const save_text=(data)=>dispatch=>{
//     return M_userApi.save_text(data,dispatch)
//     .then(e=>{
//         // console.log(e);
//     })
// }
export const loadSendText = debounce(save_text,1500)