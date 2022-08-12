import { axios_create, Error, instonsCreat, instons_create } from "./helpAPI";
const defoltURL = "/reg/log/"

const reg_log_Api = {
    registration: function(form , dispatch)  {
        return this.post('/register', ...axios_create(form))
        .catch((e) => Error(e, dispatch))

    },
    log_in:function( form, dispatch )  {
        return this.post('/log-in', ...axios_create(form))
        .catch((e) => Error(e, dispatch))
    },

    autorisation:function (token, dispatch )  {
        return this.get('/autorisation', {
            headers: {
                'Autorization': token
            }
        })
            .catch((e) => Error(e, dispatch))
    }
}


export default instonsCreat(defoltURL,reg_log_Api)




// post('ss',{data :23},{header})

// npm i
//yarn install
