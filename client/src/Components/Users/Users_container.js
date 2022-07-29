import React, { useEffect } from "react";
import { connect } from "react-redux";
import { get_users,R_FU_USERS_PARAMS_SET } from "../../redux/Users/Users.redux";
import Users from "./Users";



const Users_container=(props)=>{

    useEffect(()=>{
        // console.log(1);
        props.get_users(props.users.params)
        // console.log(props);
    },[])
    // console.log(props.users.users);
    return <Users  {...props}/>
}


const mapStateToProps = ({users}) => ({
    users
})

export default connect(mapStateToProps,{get_users,R_FU_USERS_PARAMS_SET})(Users_container)