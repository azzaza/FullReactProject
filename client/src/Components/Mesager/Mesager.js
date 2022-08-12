import React, { useState } from "react";
import Message_users from "./Message_users";
import C from './Mesager.module.css'
import Chat_global from "./Chat/Chat_global";


const Mesager=(props)=>{


const [id,seId] = useState(props._id)



    return <div className={C.messager_cont}>
        
            <Message_users {...props} seId={seId}/>
        
        
            <Chat_global {...props} _id={id} seId={seId}/>
        

    </div>
}



export default Mesager