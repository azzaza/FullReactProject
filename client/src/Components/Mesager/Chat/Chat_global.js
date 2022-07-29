import React, { useState, useTransition } from "react";
import Spiner from "../../Spiner/Spiner";
import Chat from "./Chat";
import Chat_container from "./Chat_container";
import C from '../Mesager.module.css'
import Buttom_menu from "./Bottom_menu";



const Chat_global = (props) => {
    // console.log(props);
    let chat = {}
    if(props._id){
        chat= props.message.filter(e=>e.page_name==props._id)[0]
    }
    const remove_chat = () => props.remove(chat?._id)
    // const  = props.chat;
    // console.log(props._id);
    
    // const [remove, setRemove] = useState([])/
    
    // if (!chat) return <Spiner />
// const [input, setInput] = useState('')
//     const input_change = (e) => {
//         setInput(e.target.value)
//     }
    



    

    // const remove_chat=()=> props.remove(chat?._id)
    
    // const button_click = () => {
    //     if (!input.trim()) return
    //     props.send_message({ id: props._id, text: input })
    //     setInput('')
    // }


    // const remove_message = (_id) => setRemove([...remove,_id])
  

    return <div className={C.chat_cont}>
        <div className={C.top_men}>
            {chat?.name ? chat?.name : 'Chat'}
            {/* <button onClick={remove_chat}>remove chat</button> */}
        </div>
        {props._id?<>
        <Chat_container _id={props._id} mobileMenu={[{name : 'delete chat',fun :remove_chat}]}/>
        <Buttom_menu {...props}/>
        </> 
        :<p>Chose caht</p>
        }
        {/* <div className={C.buttom_men}>
            <div className={C.input_cont}>
                {chat?._id ? <>
                    <input onChange={input_change} type='text' value={input} />
                    <button onClick={button_click}>Send</button>
                </> :
                    <p>Chose user</p>}

            </div>
        </div> */}
    </div>
}





export default Chat_global