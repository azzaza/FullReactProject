import { Error, instonsCreat, instons_create } from "./helpAPI";
const defoltURL = "/users"

const usersApi = {
    get_users: function(dispatch,params)  {
        // console.log(params);
        return this.get('/get',{params : {find : params.name}})
            .catch((e) => Error(e, dispatch))
    }
}




export default instonsCreat(defoltURL, usersApi)