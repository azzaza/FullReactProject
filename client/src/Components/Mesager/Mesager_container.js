import React, { useEffect } from "react";
import Mesager from "./Mesager";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { get_message,get_users_message,send_message } from "../../redux/Message/Message.redux";

const Mesager_container=(props)=>{
    const user_id=useParams().id
    useEffect(()=>{
        props.get_users_message()
    },[])

    useEffect(()=>{
        if(!user_id) return;
        props.get_message(user_id)
        //dfsf
        console.log(user_id);
    },[user_id])



    // console.log(props);
    return <Mesager {...props} _id={user_id}/>
}   

const mapStateToProps = state => {
    
    return {
        message:state.message
    }
}

export default  connect(mapStateToProps,{get_message,get_users_message,send_message})(Mesager_container)