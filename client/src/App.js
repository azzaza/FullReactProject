import Header from './Components/Header/Header';
import React from 'react';
import './App.css';
import Routs  from './Components/Routs/Routs';
import Error_api from './Components/Error/Error_api';
import { useEffect } from 'react';


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
        <div className='div'  style={{
          background:  props.settings.themaMain,
          color:props.settings.themaText,           
          }
          
          }>
                 <Routs isUser={props.user}  />
        </div>
        <Error_api  clearError={clearError} error={props.error}/>
    </div>
  );
}

export default App;
