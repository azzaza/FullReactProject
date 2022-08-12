import { M_userApi } from "../../api/message"
import { v4 as id } from 'uuid';
import { R_FU_SOKET_SEND_MESSAGE } from "../Web_socket/Web_socket.redux";
import debounce from "lodash.debounce";
import store from "../../store";



const D = {
    GET_MESSAGE: 'GET_MESSAGE',
    GET_USERS_M: 'GET_USERS_M',
    GET_CHAT:'GET_CHAT',
    SOKET_ADD: 'SOKET_ADD',
    SAVE_TEXT: 'SAVE_TEXT',
    CREATE_CHAT: 'CREATE_CHAT',
    REMOVE_CHAT: 'REMOVE_CHAT'
}
const m = {
    '_idasdas': {},

}



const state = [
    {},
    {},
]



export const MessageRedux = (state = [], action) => {


   
    switch (action.type) {
        case D.SAVE_TEXT:
            const state_map = state.map(e => {
                if (e.page_name == action.data._id) {
                    e.textMessage = action.data.text
                }
                return e
            })
            return state_map
        case D.GET_MESSAGE:

            const user = state.find(e => e._id == action.messages._id)
            user.message = action.messages.message


            const filter_st = state.filter(e => e._id != action.messages._id)
            filter_st.push(user)
            return filter_st
        case D.GET_USERS_M:
            return action.users.reverse()
        case D.CREATE_CHAT:

            return [action.chat, ...state]
        case D.SOKET_ADD:
            let isFind = false;

            const s = state.map(i => {
                if (i._id === action.data.id) {
                    isFind = true;
                    i.message.push(action.data.message)
                }

                return i
            })

            
            if(isFind == false) get_chat(action.data.id)(action.dispatch)
           
            return s
        case D.GET_CHAT:
            return [...state,action.chat]
        case D.REMOVE_CHAT:
            return state.filter(e => e._id != action._id)

        default: return state

    }
}

const R_FU_MESSAGE_GET_USERS = (users) => ({ type: D.GET_USERS_M, users })
const R_FU_MESSAGE_CREATE_CHAT = (chat) => ({ type: D.CREATE_CHAT, chat })
export const R_FU_MESSAGE_GET_MESSAGE = (messages) => ({ type: D.GET_MESSAGE, messages })
export const R_FU_MESSAGE_SAVE_TEXT = (data) => ({ type: D.SAVE_TEXT, data })
const R_FU_MESSAGE_REMOVE_CHAT = (_id) => ({ type: D.REMOVE_CHAT, _id })
const R_FU_MESSAGE_GET_CHAT=(chat)=>({type:D.GET_CHAT,chat})

export const get_message = (id) => dispatch => {
    return M_userApi.get_message(id, dispatch)
        .then(e => {
            dispatch(R_FU_MESSAGE_GET_MESSAGE(e.data.chat))
        })
}

export const create_chat = (id) => dispatch => {
    return M_userApi.create(id, dispatch)
        .then(e => {
            dispatch(R_FU_MESSAGE_CREATE_CHAT(e.data.chat))
            return e
        })
}

const get_chat = (id) => dispatch => {

    M_userApi.get_chat(id)
        .then(e => {

            dispatch(R_FU_MESSAGE_GET_CHAT(e.data.chat))
        })
}


const post_id = (data) => dispatch => {

    return M_userApi.post_id(data, dispatch)

}

export const get_users_message = () => dispatch => {
    return M_userApi.get_users(dispatch)
        .then(e => {

            const arr_id = e.data.messages.map(e => e._id)
            return post_id(arr_id)(dispatch)
                .then(respons => {

                    const allMessage = e.data.messages.map((el, id) => {

                        el.name = respons.data.users[id].name
                        el.page_name = respons.data.users[id].page_name
                        return el
                    })
                    dispatch(R_FU_MESSAGE_GET_USERS(allMessage))
                })
        })
}

export const send_message = (data) => dispatch => {
    return M_userApi.send_message({ ...data, messageID: id() }, dispatch)
        .then(e => {

            dispatch(R_FU_SOKET_SEND_MESSAGE({ my_id: e.data.my_id, another_id: e.data.another_id }))

        })
}

export const remove_message = (data) => dispatch => {

    return M_userApi.remove_messages(data, dispatch)
        .then((e) => {

            dispatch(get_message(e.data.page_name))
            store.message.messageForRemove = [];

        })

}
export const remove = (_id) => dispatch => {//chat
    return M_userApi.remove(_id, dispatch)
        .then(e => {
            dispatch(R_FU_MESSAGE_REMOVE_CHAT(_id))

        })

}
export const save_text = (data) => {
    return M_userApi.save_text(data)

}



export const loadSendText = debounce(save_text, 1500)