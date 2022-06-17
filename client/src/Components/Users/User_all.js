import React, { useContext, useEffect, useState } from "react";
import C from "./Users.module.css"
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import img from './img_def.jpg'
const User_all = (props) => {
   


    return <div className={C.user} key={props.id}>
        {props?.photos?.small ? <img className={C.img} src={props.photos.small} /> : <img className={C.img} src={img} />}
        <div className={C.main_inf}>
            <Link to={'/home/'+props.page_name}>{props.name}</Link>
            {/* {context?.email && (followed ? <button onClick={unfollow_click}>{props.text?.unsubscribe}</button> : <button onClick={folow_click}>{props.text?.subscribe}</button>)} */}

        </div>

    </div>
}

export default User_all