import React from "react";
import Chat from "./Chat";
import Message_users from "./Message_users";
import C from './Mesager.module.css'


const Mesager=(props)=>{

    return <div className={C.messager_cont}>
        
            <Message_users {...props}/>
        
            <Chat {...props}/>
        

    </div>
}



export default Mesager