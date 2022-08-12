import React from "react";
import { connect } from "react-redux";
import { R_FU_SETTONGS_CHNAGE_THEMA } from "../../redux/Settings/Settings.redux";
import { update_data,update_password } from "../../redux/User/User.redux";
import Settings from "./Settings";



const Settings_container=(props)=>{
    
    return <Settings {...props}/>
}


const mapStateToProps = ({user}) => ({
    user
})

export default connect(mapStateToProps,{update_data,update_password,R_FU_SETTONGS_CHNAGE_THEMA})(Settings_container)