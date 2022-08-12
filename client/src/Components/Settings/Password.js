import React, { useState } from "react";
import C from './Settings.module.css'



const data={
    password:'',
    new_password:'',
    confirm_password:''
}


const Password=(props)=>{
    const [type, setType] = useState('password')
    const [Error,setError]=useState(false)
    const [d,setD]=useState(data)

    const input_change=(e)=>{
        setD({...d, [e.target.placeholder] : e.target.value})
    } 
    const save_click=()=>{
        setError(false)
        if(d.new_password!==d.confirm_password){
            setError(true)
            return
        }
        props.update_password({password:d.password,new_password:d.new_password})
    }
    const change_type=()=>{
        if(type=='password'){
            setType('text')
        }
        if(type=='text'){
            setType('password')
        }
    }

    return <div className={C.password_cont}>
        <input className={C.password} type='password' value={d.password} placeholder="password" onChange={input_change}/>

        <div className={C.password}>
            <input type={type} value={d.new_password} placeholder='new_password' onChange={input_change}/>
            <button className={C.change_type} onClick={change_type}>O</button>
        </div>
            < input className={C.password} type={type} value={d.confirm_password} placeholder='confirm_password' onChange={input_change}/>
      
        {Error&&<p>confirm_password must be same new_password </p>}
        <button className={C.password} onClick={save_click}>Save Password</button>
    </div>
}

export default Password