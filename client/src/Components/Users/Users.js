import React from "react";
import Users_list from "./Users_list";
import C from './Users.module.css'
import SpinerHOC from "../../HOC/SpinerHOC";
import { SpinerData } from "../../HOC/SpinerHOC";

const Users=(props)=>{
        const S = SpinerData();

        const search_inp=(e)=>{
            props.R_FU_USERS_PARAMS_SET({name:e.target.value})

        }
        const search_click=()=>{
            S.on()
            props.get_users(props.users.params).finally(S.off)
            props.R_FU_USERS_PARAMS_SET({name:''})
            
        }
    return <div>
        <div className={C.search_cont}>
            <input type='text' onChange={search_inp} value={props.users.params.name}/>
            <button onClick={search_click}>Search</button>
        </div>
        <Users_list isSpiner={S.isSpiner}{...props}/>
    </div>
}


export default SpinerHOC(Users)
