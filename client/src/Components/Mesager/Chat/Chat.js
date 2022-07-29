import React, { useState, useTransition, useEffect, useRef, memo } from "react";
import C from '../Mesager.module.css'
import Message from "./Message";
import './chat.css'
import { Chat_C } from "./chatCSS";
import { useMemo } from "react";





const Chat = (props) => {
    const user_id = props._id
    const chat = props.chat
    //
    const [remove, setRemove] = useState([])
    const [isLoading, setTransition] = useTransition()
    //

    
    const remove_message = (_id) => setRemove([...remove, _id])
    const checkActive = id => remove.find(e => e._id == id);
    const ref = useRef()
    const chat_cont = ref.current
    // 
    // console.log(user_id,chat);
    useEffect(() => {
        // console.log(props);
        
        // console.log(user_id);
        if (!props.allMessage[0]) return // true
        if(chat?.message)return
        if (!user_id) return;
// console.log(chat);
        props.get_message(user_id)



    }, [user_id,chat])


    useEffect(() => {
        if (chat_cont == null) return
        if (props?.chat?.message?.length < 10 || !props?.chat?.message?.length) return
        // console.log('Scroll');
        chat_cont.scrollTo({ top: chat_cont.scrollHeight, behavior: 'smooth' })
    }, [props?.chat?.message])
    // console.error(props.chat.message);
    const m = props.chat.message
    const message=useMemo(()=>{
        // console.log(chat);
        // console.error(chat.message);
       if(!chat.message)return
       return chat.message
        .map(e => <Message key={e._id}  {...e} remove_message={remove_message} checkActive={() => checkActive(e._id)} />)
    },[props.chat.message, m ? m[m.length - 1]?._id  : 1])


    return <>
        {(user_id && chat.message) &&

            <div ref={ref} className={C.chat + ' chat'}>
                {message}
                {/* {
                     chat.message
                     .map(e => <Message key={e._id}  {...e} remove_message={remove_message} checkActive={() => checkActive(e._id)} />)
                } */}


            </div>
        }
    </>
}
let props = null;
window.props = props;
const memo_func=(pref,next)=>{
    // console.log(pref.chat.message);
    // console.log(next.chat.message);
    // console.log(pref.chat._id===next.chat._id&& pref._id===next._id);
    //TODO allmessage===chat
    // return false
    // console.log(props);

// debugger
const m = next.chat.message;
// const MLastId = m ? m[m.length - 1]._id  : []
// const PLastId = props ? props[props.length - 1]._id : []
const IscheckRender = pref.chat.message===m && pref._id===next._id && props ===m // && MLastId === PLastId//&& props[props.length - 1]._id === m[m.length -1]._id ;
// console.group('S')
// console.log(PLastId);
// console.log(MLastId);
// console.log(IscheckRender);
// console.groupEnd()
   // props = window.JSON.stringify(next.chat.message)
   // const JSON =  window.JSON.stringify(next.chat.message)
   props = next.chat.message ?  window.JSON.parse( window.JSON.stringify(next.chat.message)) : null
//    window.json = JSON
//    console.log(window.JSON.parse(JSON));
    return IscheckRender
}

export default memo(Chat,memo_func)