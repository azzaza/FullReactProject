import React, { useEffect } from "react";
import { connect } from "react-redux";
import App from "./App";
import { User_Token } from "./Components/Local/Local";
// import User from "./Components/Provider";
import { autorisation } from "./redux/User/User.redux"; 

const App_container=(props)=>{
 
    useEffect(()=>{
       
            props.autorisation()    

    },[])


return <App />
    
}

const mapStateToProps = state => {
    
    return {
      user:state.user,
    }
  }
  
  export default connect(mapStateToProps,{autorisation})(App_container)