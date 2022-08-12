import React, { useState, useTransition, useEffect, useRef, memo } from "react";
import C from '../Mesager.module.css'
import Message from "./Message";
import './chat.css'
import { useMemo } from "react";
import store from "../../../store";





const Chat = (props) => {
    const user_id = props._id

    const chat = props.chat
    //
    const [remove, setRemove] = useState([])
    const [isLoading, setTransition] = useTransition()
    //

    const remove_message = (_id) => {
       
        setRemove([...remove, _id])
        store.message.messageForRemove.push(_id)
    }
    const remove_from_remove=(_id)=>{
        setRemove(remove.filter(e=>e!=_id))
        store.message.messageForRemove.splice( store.message.messageForRemove.indexOf(_id),1)
    }

    const choiceDelt = _id => remove.includes(_id) ? remove_from_remove(_id) : remove_message(_id) 


    const checkActive = id => remove.find(e => e == id);

    const ref = useRef()
    const chat_cont = ref.current


    useEffect(() => { //get messages

        if (!props.allMessage[0]) return // true
        if (chat?.message) return
        if (!user_id) return;
     
        props.get_message(user_id)



    }, [user_id, chat])

    useEffect(() => { // remove message end
        store.message.messageForRemove.length == 0 && setRemove([])
    }, [store.message.messageForRemove.length == 0])

    useEffect(() => {//scroll
        if (chat_cont == null) return
        if (props?.chat?.message?.length < 10 || !props?.chat?.message?.length) return

        chat_cont.scrollTo({ top: chat_cont.scrollHeight, behavior: 'smooth' })
    }, [props?.chat?.message])

    const m = props.chat.message
    const message = useMemo(() => {
        if (!chat.message) return
        return chat.message
            .map(e => <Message key={e._id}  {...e} remove={remove} choiceDelt={choiceDelt} checkActive={() => checkActive(e._id)} />)
    }, [remove, props.chat.message, m ? m[m.length - 1]?._id : 1])


    return <>
        {(user_id && chat.message) &&

            <div ref={ref} className={C.chat + ' chat'}>
                {message}



            </div>
        }
    </>
}
let props = null;
window.props = props;
const memo_func = (pref, next) => {



    const m = next.chat.message;

    const IscheckRender = pref.chat.message === m && pref._id === next._id && props === m 
    
    props = next.chat.message ? window.JSON.parse(window.JSON.stringify(next.chat.message)) : null

    return IscheckRender
}

export default memo(Chat, memo_func)