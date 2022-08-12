import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams} from "react-router-dom";
import { get_home } from "../../redux/Home/Home.redux";
import { create_chat } from "../../redux/Message/Message.redux";
import Home from './Home'

const Home_Container=(props)=>{
    const user_id=useParams()
   useEffect(()=>{
        props.get_home(user_id.id)
   },[user_id.id])
    return <Home {...props}/>
}

const mapStateToProps = state => {
    
    return {
        home:state.home,
        message:state.message
    }
}

export default  connect(mapStateToProps,{get_home,create_chat})(Home_Container)