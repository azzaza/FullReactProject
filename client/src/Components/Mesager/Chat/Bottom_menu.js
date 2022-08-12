import React, {useEffect,useState } from "react";
import { loadSendText } from "../../../redux/Message/Message.redux";
import C from '../Mesager.module.css'
const Buttom_menu=(props)=>{
    
    const [input, setInput] = useState('')
    useEffect(()=>{
        setInput(props?.message?.find(e=>e.page_name==props._id)?.textMessage)  //get text For input
    },[props._id])
    useEffect(()=>{ 
        if(!input.trim())return
        
        loadSendText({text:input,_id:props._id})
     
    },[input])
   
    const input_change = (e) => {
        props.R_FU_MESSAGE_SAVE_TEXT({text:e.target.value,_id:props._id})
        setInput(e.target.value)
    }
    const onEnter=(e)=>{
        if(e.key=='Enter'){
            button_click()
        }
    }
    const button_click = () => {
        if (!input.trim()) return
        props.send_message({ id: props._id, text: input })
        setInput('')    
        props.R_FU_MESSAGE_SAVE_TEXT({text:'',_id:props._id})
        loadSendText({text:'',_id:props._id})
    }

    return <div className={C.buttom_men}>
            <div className={C.input_cont}>
                {props._id ? <>
                    <input onChange={input_change} onKeyDown={onEnter}   type='text' value={input} />
                    <button onClick={button_click}>Send</button>
                </> :
                    <p>Chose user</p>}

            </div>
        </div>
} 



export default Buttom_menu