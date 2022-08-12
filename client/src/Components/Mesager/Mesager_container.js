import React, {  useEffect,  useTransition } from "react";
import Mesager from "./Mesager";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { get_message, get_users_message, send_message, remove, save_text,R_FU_MESSAGE_SAVE_TEXT,remove_message } from "../../redux/Message/Message.redux";
import Spiner from "../Spiner/Spiner";



const Mesager_container = (props) => {
    
    const [isLoading, setTransition] = useTransition()



   
    const user_id = useParams()
    
    useEffect(
        () => {

            setTransition(
                () => {

                    if (props.message[1]) return
                    props.get_users_message()
                }
            )

         

        }, [])



  




    if (isLoading || props.message[0] === undefined) return <Spiner />

    return <Mesager {...props} _id={user_id.id}  user_id={user_id}/>
}







const mapStateToProps = state => {

    return {
        message: state.message,
    }
}


const memo_func=(pref,next)=>{
  return pref===next
}
const Component = connect(mapStateToProps, { get_message, get_users_message, send_message, remove,remove_message, save_text,R_FU_MESSAGE_SAVE_TEXT})(Mesager_container)

export default React.memo(Component, memo_func)