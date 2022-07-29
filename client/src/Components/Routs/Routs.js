import React from "react";
import {
    Routes, 
    Route,
    Navigate
} from "react-router-dom";
import Log_in from "../Log_in/Log_in";
import Registration from "../Registration/Registration";
import { User_Token } from "../Local/Local";
import Error_404 from '../Error/Error_404'
import Users_container from "../Users/Users_container";
import Home_Container from "../Home/Home.Container";
import Settings_container from "../Settings/Settings_container";
import Mesager_container from "../Mesager/Mesager_container";
import { connect } from "react-redux";
 const Routs = props => {

    const log_out=()=>{
        User_Token.delete()


    }

  


return <Routes>

   {props.isUser 
   ?<>
   <Route  path='/home' element={<Home_Container/> }  >
       <Route path=":id"></Route>
    </Route>
    <Route path="/users" element={<Users_container/>}/>
    <Route path="/mesager" element={<Mesager_container/>}>
      <Route path=":id"></Route>
    </Route>
    <Route path="/settings" element={<Settings_container/>}/>
    <Route path="*" element={<Navigate  to={"/home/"+ props?.user?.page_name} replace />} />
     {/* <Route  path='/home/:id' element={ <Home_Container/>}   /> */}
   </> 
   : <>
   <Route path='/register' element={<Registration />}  />
   <Route path='/log-in' element={<Log_in />} />
   <Route path="/users" element={<Users_container/>}/>
   <Route path="*" element={<Navigate to="/log-in" replace />} />
   
   </>
   }
   
   {/* no find */}
   
  
</Routes>

}




const mapStateToProps = state => {
    
    return {
      user:state.user,
    }   
  }
  
  export default connect(mapStateToProps)(Routs)





// const RedirF = props => {

// <Redirect to

//     return <div>as</div>
// }
