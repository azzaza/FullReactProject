import React, { useEffect } from "react";

import C from './Error.module.css'
import Modal from 'react-modal'

const Error_api = ({clearError, error }) => {


  const customStyles = {
    overlay: {
      position: 'absolute',
    right: 0,
    top: '10px',
    height: '70px',
    width: '20%',
    'marginLeft': '80%',
    'marginTop': '40px',
    border: '1px solid black',


    },
  };


  return <div>
    <Modal className='C.error'
      isOpen={error.is_open}
      ariaHideApp={false}
      style={customStyles}
      shouldCloseOnEsc={
        true}
    >
      <div className={C.button_close}>
        <button  onClick={clearError}>
          X
        </button>
        
      </div>
<p>{error?.message}</p>



    </Modal>
  </div>
}



export default Error_api