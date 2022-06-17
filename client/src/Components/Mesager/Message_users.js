import React from "react";
import { Link } from "react-router-dom";
import C from './Mesager.module.css'


const Message_users=(props)=>{


    console.log(props);

    return <div className={C.users_cont}>
        <div className={C.top_men}>
             Users
        </div>
       
        <div className={C.users}>
            {props.message?props.message.map(e=>{
            return <div key={e._id} className={C.user}>
                {/* <Link to={'/mesager/'+e._id}>{e.name}</Link> */}
                <p>{e.name}</p>
            </div>
        }):<p></p>}
        </div>
        
    </div>
}



export default Message_users