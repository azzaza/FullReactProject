import React from "react";
import C from '../Mesager.module.css'



const Message = ({ _id, myMessage, remove_message, text,checkActive }) => {


    return <div className={C.C_chat + ' ' + (checkActive() ? C.active : ' ') }>


        <div className={C.message + ' '+ (myMessage ? C.chat_my : C.chat_other)} onDoubleClick={()=>remove_message(_id)}>
            <p>{text}</p>
        </div>
    </div>
}

    

export default Message