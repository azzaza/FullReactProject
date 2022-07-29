import React, { useState } from "react";




const Input = (props) => {
 
    const [input, setInput] = useState('')
   
    



    

    const remove_chat=()=> props.remove(chat?._id)
    
    const button_click = () => {
        if (!input.trim()) return
        props.send_message({ id: props._id, text: input })
        setInput('')
    }

    
    const remove_message = (_id) => setRemove([...remove,_id])
  

    return <div className={C.chat_cont}>
        <div className={C.top_men}>
            {chat?.name ? chat?.name : 'Chat'}
            <button onClick={remove_chat}>remove chat</button>
        </div>
        <Chat_container/>
        <div className={C.buttom_men}>
            <div className={C.input_cont}>
                {chat?._id ? <>
                    <input onChange={input_change} type='text' value={input} />
                    <button onClick={button_click}>Send</button>
                </> :
                    <p>Chose user</p>}

            </div>
        </div>
    </div>
}





export default Chat_global