import {  Error, instonsCreat, instons_create } from "./helpAPI";


const defoltURL = "/home"

const apiHome = {
    get_home: function (id,dispatch) {
        return this.get('/user', {
            headers: {
                'ID': id
            }
        }).catch((e) => Error(e, dispatch))
    },

}


export default instonsCreat(defoltURL,apiHome)

// export default {
//     get_home: (id1, dispatch1) => {
//         return instons_create(defoltURL, (instons, id = id1, dispatch = dispatch1) => {
//             return instons.get('/user', {
//                 headers: {
//                     'ID': id
//                 }
//             })
//                 .catch((e) => Error(e, dispatch))

//         })
//     }
// }


// export default
// post('ss',{data :23},{header})