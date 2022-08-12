import React from "react";
import { NavLink } from "react-router-dom";
// import { NavLink } from "../../cssComponent/cssComponent";
import C from "../Header/Header.module.css"
import { connect } from "react-redux";
import { User_Token } from "../Local/Local";
import { R_FU_USER_LOG_OUt } from '../../redux/User/User.redux'
const Header = (props) => {
  const log_out = () => {
    User_Token.delete()
    props.R_FU_USER_LOG_OUt()

  }
  const homePage = '/home/' + (props.user ? props?.user?.page_name : '')

  return <header className={C.header} style={{
    background: props.settings.themaTop,
    color: props.settings.themaText,
  }}>
    {!props.user
      ? <>
        <NavLink to='/register' text='Registration'>Registration</NavLink>
        <NavLink to='/log-in'>Log-in</NavLink>
        <NavLink  to='/users'>Users</NavLink>
      </>
      : <>
        <button onClick={log_out}>Log Out</button>
        <NavLink to={homePage}>Home</NavLink>
        <NavLink to='/users'  text='Users'>Users</NavLink>
        <NavLink to='/mesager'>Mesager</NavLink>
        <NavLink to='/settings'>Settings</NavLink>
      </>
    }




  </header>
}

const mapStateToProps = state => {

  return {
    user: state.user,
    settings: state.settings
  }
}

export default connect(mapStateToProps, { R_FU_USER_LOG_OUt })(Header)
