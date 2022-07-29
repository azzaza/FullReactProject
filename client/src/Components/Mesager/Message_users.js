import React, { useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import C from './Mesager.module.css'


const Message_users = (props) => {
    // const navigate = useNavigate()
    const on_click = (e, _id) => {
        props.seId(_id)
        const regxp = /\/[0-9]{1,10}/gi
        let url_cur = '' + window.location
        url_cur = url_cur.replace(regxp, '')

        // console.log(url_cur);
        const url = url_cur + '/' + _id
        // console.log(url);

        window.history.pushState({}, '', url)
    }
    ///! add url page_name push state 
    // console.log(props.message);




    const users = useMemo(()=>{
        return props.message.map(e => {
            return <div key={e._id} className={C.user}>
                <div onClick={(el) => {
                    on_click(el, e.page_name)
                }}>
                    {e.name}</div>
            </div>
        })
    },[props.message.length])




    return <div className={C.users_cont}>
        <div className={C.top_men}>
            Users
        </div>

        <div className={C.users}>
            {props.message ? users : <p></p>}
        </div>

    </div>
}



export default Message_users