import { connect } from "react-redux";
import { NavLink as NewLink } from "react-router-dom";
import styled from "styled-components";
 const NavLinks = ({text,to,settings})=>{
console.log(settings);
    return <NewLink style={{color:settings.themaText}} to={to} > {text}</NewLink>
}

const mapStateToProps = state => {

    return {
      settings: state.settings
    }
  }
export const NavLink = connect(mapStateToProps)(NavLinks)

const css = {

}

export const Button = styled.button`



`