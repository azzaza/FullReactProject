import axios from "axios"
import { R_FU_ERROR_SET } from "../redux/Error/Error.redux"

export const Error = (data_res, dispatch) => {
    const { status, data } = data_res.response
    const arr = []

    switch (status) {

        case 200: return data
        default: return dispatch(R_FU_ERROR_SET(data.message, status, true))
    }

    //  response.status == 200 ? response.data :console.error(response)
}

export const axios_create = (data) => ([
    JSON.stringify(data),
    {
        headers: {
            'Content-Type': 'application/json'

        }

    }
])



export const instons_create = (default_url, func) => {
    const instons = axios.create({
        baseURL: default_url
    })
    return func(instons)
}
export const instonsCreat = (default_url, obj) => {

    const instons = axios.create({
        baseURL: default_url
    })

    const newApi = {}
    for (const key in obj) {

        newApi[key] = obj[key].bind(instons)


    }
    // if(default_url='/user/'){
    //     newApi['instons']=instons
    // }

    return newApi
}
export const instonsCreatforUser = (default_url, token, _id, obj) => {
    const instons = axios.create({
        baseURL: default_url,
        headers: {
            'Autorization': token,
            _id: _id
        }
    })
    const newApi = {}
    for (const key in obj) {

        newApi[key] = obj[key].bind(instons)


    }
    return newApi
}

// export const save_api_token=(defoltURL,user,userApi)=>{
//     const axios = instonsCreat(defoltURL, userApi)
//     if(user){
//         axios.headers['Autorization'] = user.token;
//         axios.headers['userId'] = user._id;
//         return axios
//     } else {
//         return axios
//     }
// }




