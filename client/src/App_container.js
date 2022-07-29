import React, { useEffect } from "react";
import { connect } from "react-redux";
import App from "./App";
import { User_Token } from "./Components/Local/Local";

// import User from "./Components/Provider";
import { autorisation } from "./redux/User/User.redux"; 
import { open_socket, connection, close_conection } from "./redux/Web_socket/Web_socket.redux";

// soket.addEventListener('сдщіу',e=>{
// soket.addEventListener('message',e=>{
// console.log(JSON.parse(e.data.toString()));

// })
const App_container=(props)=>{

  useEffect(()=>{
        props.autorisation()   


        if(props.ws.connection === false){
          // soket.
          const soket = new WebSocket('ws://localhost:5000')
          connection(soket)
        }
    },[])
    const close_click=()=>{
      close_conection()
    }

return <>
  <App />
  {/* <button onClick={close_click}>Close</button> */}
</>
}

const mapStateToProps = state => {
    
    return {
      user:state.user,
      ws:state.ws
    }
  }
  
  export default connect(mapStateToProps,{autorisation})(App_container)