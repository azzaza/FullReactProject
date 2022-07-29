import React, { useState } from "react";
// import Chat from "./Chat";
import Message_users from "./Message_users";
import C from './Mesager.module.css'
import Chat_global from "./Chat/Chat_global";


const Mesager=(props)=>{
// console.log(props._id);

const [id,seId] = useState(props._id)

    // const 

    return <div className={C.messager_cont}>
        
            <Message_users {...props} seId={seId}/>
        
        
            <Chat_global {...props} _id={id} />
        

    </div>
}



export default Mesager