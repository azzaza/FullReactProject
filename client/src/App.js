import Header from './Components/Header/Header';
import {
  Routes,
  Route,

} from "react-router-dom";
import './App.css';
import Registration from './Components/Registration/Registration';
import Log_in from './Components/Log_in/Log_in';
import Routs  from './Components/Routs/Routs';
import Error_api from './Components/Error/Error_api';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { R_FU_ERROR_SET } from './redux/Error/Error.redux';
// import user from '../../server/models/user';

const shemaError = {
  message : 'text',
  code : 405
}


function App(props) {

  const clearError = ()=>props.R_FU_ERROR_SET('',null,false)

  useEffect(()=>{
    if(props.error.is_open) setTimeout(clearError,5000)
    
  },[props.error])

  return (
    <div className='app'>
      
        <Header/>
        <div className='div'>
          
          {/* <Routes>
            <Route  path='/register' element={<Registration/>}/>
            <Route  path='/log-in' element={<Log_in/>}/>
          </Routes> */}
                 <Routs isUser={props.user}  />
        </div>
        <Error_api  clearError={clearError} error={props.error}/>
    </div>
  );
}

const mapStateToProps = state => {
    
  return {
    user:state.user,
     error:state.error
  }
}

export default connect(mapStateToProps,{R_FU_ERROR_SET})(App);
