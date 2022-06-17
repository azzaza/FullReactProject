import React, { useEffect, useState } from "react";
import axios from "axios";
import { Error, instonsCreat, instonsCreatforUser ,axios_create} from "./helpAPI";
const defoltURL = "/user"


export let U_userApi = null;
export const change_U_userApi = (token, _id) => {
    U_userApi = instonsCreatforUser(defoltURL, token, _id, {
        settings: function (data,dispatch) {
            return this.post('/settings',...axios_create(data)).catch((e) => Error(e, dispatch))
        },
        password:function (data,dispatch){
            return this.post('/password',...axios_create(data)).catch((e) => Error(e, dispatch))
        }
      
    })
}
//-7

// let instons

// const user_Api=

// const U_user_Api = {

// }

// instonsCreatforUser
export const userApi = instonsCreat(defoltURL, {
    get: function (dispatch) {
        return this.get('').catch((e) => Error(e, dispatch))
    },
})


// instonsCreatforUser(defoltURL, usersApi)



// export const getUser = async (token,_id) => {
//     const axios = instonsCreat(defoltURL, user_Api)
//     if(token&&_id){
//         // console.log( axios.instons);
//         axios.instons.defaults.headers.common['Autorization'] = token;
//         axios.instons.defaults.headers.common['userId'] = _id;
//         console.log(axios);
//         instons=axios
//     } else {
//         instons=axios
//     }
//     return axios
// }



// const AddDefoultData = (token,_id) =>{
// const [axi, setAxi] = useState(axios)




//   return axios
// }


// console.log(instons);
// export default instons
// export default AddDefoultData