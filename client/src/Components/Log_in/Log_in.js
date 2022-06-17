import React, { useState } from "react";
import { connect } from "react-redux";
import C from '../Registration/Registration.module.css'
import { log_in } from "../../redux/User/User.redux";

const form = {
    email : 'asda@asdasd.asd',
    password : '11111111',
}

const Log_in = (props) => {

    const [formV,setFormV]=useState(form)
    
    const change_input=(e)=>{
        const key=e.target.placeholder
        setFormV({...formV, [key]:e.target.value})
    }

    const log_in=()=>{
        props.log_in(formV)
    }

    return <div className={C.registration_cont}>
        <div className={C.input_cont}>
            <input type='email' placeholder="email" value={formV.email} onChange={change_input}/>
            <input type='password' placeholder="password" value={formV.password} onChange={change_input}/>
            <button onClick={log_in}>
            Submit
        </button>
        </div>
    </div>
}


const mapStateToProps = state => {
    
    return {
        user:state.user
    }
}

export default  connect(mapStateToProps,{log_in})(Log_in)