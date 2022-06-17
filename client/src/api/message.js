import { Error, instonsCreatforUser, instons_create, axios_create} from "./helpAPI";
const defoltURL = "/message"



export let M_userApi = null;
export const change_M_userApi = (token, _id) => {
    M_userApi = instonsCreatforUser(defoltURL, token, _id, {
        create: function(id,dispatch)  {
            // console.log(params);
            return this.get('/create/'+id)
                .catch((e) => Error(e, dispatch))
        },
        get_message: function(id,dispatch)  {
            // console.log(params);
            return this.get(id)
                .catch((e) => Error(e, dispatch))
        },
        get_users:function(dispatch){
            return this.get()
                .catch((e) => Error(e, dispatch))
        },
        send_message: function(data,dispatch){
            return this.post('/', ...axios_create(data))
                .catch((e) => Error(e, dispatch))
        }
    })
}


// export default instonsCreatforUser(defoltURL, messageApi,)