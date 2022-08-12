import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import App from "./App";
import { R_FU_ERROR_SET } from "./redux/Error/Error.redux";
import { autorisation } from "./redux/User/User.redux";
import { connection } from "./redux/Web_socket/Web_socket.redux";

const Container = styled.a`
   color : ${settings=>settings.themaText}
`


const App_container = (props) => {
  
  useEffect(() => {
    props.autorisation()


    if (props.ws.connection === false) {
      // soket.
      const soket = new WebSocket('ws://localhost:5000')
      connection(soket)
    }
  }, [])


  return <>
  <Container settings={props.settings}>

    <App  {...props} />
  </Container>
    <style>
      a{`{ color:${props.settings.themaText};}`}
      button{`{
          color:${props.settings.themaText};
          border:${props.settings.themaBorder} 1px solid;
          background: transparent;
      }`}

      input{`{ 
        color:${props.settings.themaText};
          border:${props.settings.themaBorder} 1px solid;
          background: transparent;
          }`}
      .Users_user__obVYT{`{
         border:${props.settings.themaBorder} 1px solid;
      }`}
      .Mesager_user__5wIJn{`{
         border:${props.settings.themaBorder} 1px solid;
      }`}
      .Mesager_message__lDZNc{`{
         border:${props.settings.themaBorder} 1px solid;
      }`}
      .Mesager_top_men__Vq3XM{`{
         border-bottom:${props.settings.themaBorder} 1px solid;
      }`}
      .Mesager_users_cont__de1np{`{
         border-right:${props.settings.themaBorder} 1px solid;
      }`}
    </style>
  </>
}

const mapStateToProps = state => {

  return {
    user: state.user,
    ws: state.ws,
    settings: state.settings,
    error: state.error
  }
}

export default connect(mapStateToProps, { autorisation, R_FU_ERROR_SET })(App_container)