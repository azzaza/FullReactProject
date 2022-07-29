import React, {useDeferredValue,useEffect,useState } from "react";
import { loadSendText } from "../../../redux/Message/Message.redux";
import C from '../Mesager.module.css'
const Buttom_menu=(props)=>{
    // let input=
    
    
    const [input, setInput] = useState('')
    // console.log(input);
    useEffect(()=>{
        setInput(props?.message?.find(e=>e.page_name==props._id)?.textMessage)  //get text For input
    },[props._id])
    // const value = useDeferredValue(input,{timeoutMs : 20000}) 
    // console.log(input);
    useEffect(()=>{ 
        // console.log(props._id);
        if(!input.trim())return
        // console.log(1456);
        
        loadSendText({text:input,_id:props._id})
     
    },[input])
   
    // console.log(input);
    const input_change = (e) => {
        // console.log(5263);
        props.R_FU_MESSAGE_SAVE_TEXT({text:e.target.value,_id:props._id})
        setInput(e.target.value)
    }

    const button_click = () => {
        if (!input.trim()) return
        props.send_message({ id: props._id, text: input })
        setInput('')    
        props.R_FU_MESSAGE_SAVE_TEXT({text:'',_id:props._id})
        props.save_text({text:'',_id:props._id})
    }
    //todo input save//
    // console.log(props.message);
    return <div className={C.buttom_men}>
            <div className={C.input_cont}>
                {props._id ? <>
                    <input onChange={input_change} type='text' value={input} />
                    <button onClick={button_click}>Send</button>
                </> :
                    <p>Chose user</p>}

            </div>
        </div>
} 



export default Buttom_menu