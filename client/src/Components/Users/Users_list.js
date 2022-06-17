import React from "react";
import C from './Users.module.css'
import User_all from "./User_all";
import SpinerHOC from "../../HOC/SpinerHOC";

const Users_list=(props)=>{
    
    // console.log(props);

    return <>

        <div className={C.users_container} >
        {props.users.users && props?.users?.users.map(el =>
            <User_all key={el.page_name} {...el} />
        )}
    </div>
    
    </>
}



export default SpinerHOC(Users_list)
// export default Users_list