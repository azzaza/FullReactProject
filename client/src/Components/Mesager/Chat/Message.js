import React, { useEffect } from "react";
import C from '../Mesager.module.css'



const Message = ({ _id, myMessage, choiceDelt, text,checkActive,remove }) => {

    return <div className={C.C_chat + ' ' + (checkActive() ? C.active : ' ') }>


        <div className={C.message + ' '+ (myMessage ? C.chat_my : C.chat_other)} onDoubleClick={()=>choiceDelt(_id)}>
            <p>{text}</p>
        </div>
    </div>
}

    

export default Message