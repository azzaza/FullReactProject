import React from "react";
import { NavLink } from "react-router-dom";
import C from "../Header/Header.module.css"
import { connect } from "react-redux";
import { User_Token } from "../Local/Local";
import {R_FU_USER_LOG_OUt} from '../../redux/User/User.redux'
const Header=(props)=>{
    // console.log();
    const log_out=()=>{
      User_Token.delete()
      props.R_FU_USER_LOG_OUt()

  }
  // console.log(props.user);
  const homePage ='/home/' + (props.user ? props?.user?.page_name : '')

    return <header className={C.header}>
      {!props.user 
      ? <>
            <NavLink to='/register'>Registration    
            </NavLink><NavLink to='/log-in'>Log-in</NavLink>
            <NavLink to='/users'>Users</NavLink>
        </>
        : <>
            <button onClick={log_out}>Log Out</button>
            <NavLink to={homePage}>Home</NavLink>
            <NavLink to='/users'>Users</NavLink>
            <NavLink to='/mesager'>Mesager</NavLink>
            <NavLink to='/settings'>Settings</NavLink>
        </>
      }
        
        
            
        
    </header>
}

const mapStateToProps = state => {
    
    return {
      user:state.user,
    }   
  }
  
  export default connect(mapStateToProps,{R_FU_USER_LOG_OUt})(Header)
