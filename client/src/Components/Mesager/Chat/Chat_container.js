import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Right_ckickHOC from "../../../HOC/Right_clickHOC";
import { get_message, get_users_message, send_message,remove } from "../../../redux/Message/Message.redux";
import Chat from "./Chat";

const Chat_container=(props)=>{
    const user_id = props._id
    const [curent_chat, setCurent_chat] = useState({})
    useEffect(() => {
   

        if (!props.allMessage[0]) return // true
        if (!user_id) return;
        setCurent_chat({})
        const userMessage = props.allMessage.find(user => user.page_name === user_id) //!change
        if(!userMessage)return;
        setCurent_chat(userMessage)
    }, [props.allMessage,user_id])

    

    return <Chat {...props} chat={curent_chat} user_id={user_id} />
}

const mapStateToProps = state => {

    return {
        allMessage: state.message,
    }
}

export default connect(mapStateToProps, { get_message, get_users_message, send_message, remove })(Right_ckickHOC(Chat_container))

 