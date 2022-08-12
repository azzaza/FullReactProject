import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import C from './Home.module.css'


const Home=(props)=>{
const navigate = useNavigate()
    const mesage_click=(e)=>{
        e.preventDefault()
        props.create_chat(props.home._id)
        .then(e=>{
            if(e.status==201){
                navigate( '/mesager/'+props?.home?.page_name,{state : 'asd'})
            }
            
        })
    }

    return <div className={C.main_cont}>
        <h3>
                {props?.home?.name}
        </h3>
        <div className={C.home_cont}>
            <div className={C.img_cont}>
                <img src={props?.home?.avatar} />
            </div>
            <div>
                <NavLink to={'/mesager/'+props?.home?.page_name} onClick={mesage_click} >Send message</NavLink>
            </div>
            <div className={C.status_cont}>
                <p>{props?.home?.status}</p>
            <p>{props?.home?.isAdmin&&'Admin'}</p>
            </div>
            
        </div>
    </div>
}

export default  Home