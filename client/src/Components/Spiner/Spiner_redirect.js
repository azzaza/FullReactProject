import React from "react";
import img from './spiner.gif'
import './spiner.css'
import { Navigate } from "react-router-dom";

const Spiner=()=>{
    return <div>
        <img className='spiner' src={img}/>
        <Navigate to={'/mesage'}/>
    </div>
}



export default Spiner