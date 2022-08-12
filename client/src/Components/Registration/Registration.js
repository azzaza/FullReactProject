import React, { useState } from "react";
import C from '../Registration/Registration.module.css'
import { connect } from 'react-redux'
import { registration } from "../../redux/User/User.redux";
import { R_FU_ERROR_SET } from "../../redux/Error/Error.redux";
import { NavLink } from "react-router-dom";

const Registration=(props)=>{
     const [formV,setFormV]=useState({})
    const change_input=(e)=>{
        const key=e.target.placeholder
        setFormV({...formV, [key]:e.target.value})
    }
    const register = (e)=>{
        
        if(formV.conformPassword!==formV.password){
            props.R_FU_ERROR_SET('Confirm Password must be same as Password',406,true)
            e.preventDefault()
            return
        }
        setFormV({email:formV.email,password:formV.password,name:formV.name})
        
        props.registration(formV)
        .catch(e.preventDefault)
        
    }
    return <div className={C.registration_cont}>
        <div className={C.input_cont}>
            <input type='text' placeholder="name" value={formV.name} onChange={change_input}/>
            <input type='email' placeholder="email" value={formV.email} onChange={change_input}/>
            <input type='password' placeholder="password" value={formV.password} onChange={change_input}/>
            <input type='password' placeholder="conformPassword" value={formV.conformPassword} onChange={change_input}/>
            <NavLink to={'/log-in'} onClick={register} >
            Submit
        </NavLink>
        </div>
        
    </div>
}

const mapStateToProps = state => {
    
    return {
        user:state.user
    }
}

export default  connect(mapStateToProps,{registration,R_FU_ERROR_SET})(Registration)
