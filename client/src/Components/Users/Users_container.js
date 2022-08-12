import React, { useEffect } from "react";
import { connect } from "react-redux";
import { get_users,R_FU_USERS_PARAMS_SET } from "../../redux/Users/Users.redux";
import Users from "./Users";



const Users_container=(props)=>{

    useEffect(()=>{
        props.get_users(props.users.params)
    },[])
    return <Users  {...props}/>
}


const mapStateToProps = ({users}) => ({
    users
})

export default connect(mapStateToProps,{get_users,R_FU_USERS_PARAMS_SET})(Users_container)