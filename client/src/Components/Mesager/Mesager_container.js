import React, { memo, useDeferredValue, useEffect, useMemo, useState, useTransition } from "react";
import Mesager from "./Mesager";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { get_message, get_users_message, send_message, remove, save_text,R_FU_MESSAGE_SAVE_TEXT } from "../../redux/Message/Message.redux";
import { soket } from "../../redux/Web_socket/Web_socket.redux";
import Spiner from "../Spiner/Spiner";
import debounce from "lodash.debounce";



const Mesager_container = (props) => {
    
    // const [isFirstGet, setFirsrGet] = useState(true)
    const [isLoading, setTransition] = useTransition()



    // f.save=(a)=>{
    //     props.save_text(a)
    //     console.log('ssss');
    // }
    const user_id = useParams().id
    // const [curent_chat, setCurent_chat] = useState([])
    useEffect(
        () => {
            // if(props.message[0])return

            setTransition(
                () => {

                    if (props.message[1]) return
                    props.get_users_message()
                }
            )

         

        }, [])



    // useEffect(() => {

    //     if (!props.message[0]) return // true
    //     if (!user_id) return;
    //     const message = props.message.find(user => user.page_name === user_id)
    //     console.log(message);
    //     setCurent_chat(message)
    //         console.log(1);
    // }, [props.message])

    //  console.log(props.message[0]);





    if (isLoading || props.message[0] === undefined) return <Spiner />

    return <Mesager {...props} _id={user_id} />
}







const mapStateToProps = state => {

    return {
        message: state.message,
    }
}


const memo_func=(pref,next)=>{
    // console.log(pref);
    // console.log(next);
  return pref===next
}
const Component = connect(mapStateToProps, { get_message, get_users_message, send_message, remove, save_text,R_FU_MESSAGE_SAVE_TEXT})(Mesager_container)

export default React.memo(Component, memo_func)