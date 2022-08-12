import React, { useState, useTransition } from "react";
import Chat_container from "./Chat_container";
import C from '../Mesager.module.css'
import Buttom_menu from "./Bottom_menu";
import store from "../../../store";
import { useNavigate } from "react-router-dom";


const Chat_global = (props) => {
    const navigate = useNavigate()

    let chat = {}
    if(props._id){
        chat= props.message.filter(e=>e.page_name==props._id)[0]
    }

    const remove_chat = () => {
        navigate('/mesager')
        props.seId(null)
        props.remove(chat?._id)

    }
    const remove_message= ()=>{

       return  props.remove_message({remove:store.message.messageForRemove,id:chat._id,page_name:props._id})
    }
   
    
  const mobileMenu = [
    {name : 'delete chat',fun :remove_chat},
    {name : 'delete message',fun :remove_message},
    
]

    return <div className={C.chat_cont}>
        <div className={C.top_men}>
            {chat?.name ? chat?.name : 'Chat'}
           
        </div>
        {props._id?<>
        <Chat_container _id={props._id} mobileMenu={mobileMenu}/>
        <Buttom_menu {...props}/>
        </> 
        :<p>Chose caht</p>
        }
    </div>
}





export default Chat_global