import React, { useState } from "react";
import C from './Mesager.module.css'


const Chat = (props) => {

    const [input,setInput]=useState('')
    const input_change=(e)=>{
        setInput(e.target.value)
    }
    const button_click=()=>{
        // console.log(props._id);
        if(!input.trim())return
        props.send_message({id:'6283699d97a8ddefdbc0d2e3',text:input})
    }


    return <div className={C.chat_cont}>
        <div className={C.top_men}>
            Chat
        </div>
        <div className={C.buttom_men}>
            <div className={C.input_cont}>
                <input onChange={input_change} type='text' value={input} />
                <button onClick={button_click}>Send</button>
            </div>
        </div>
    </div>
}



export default Chat