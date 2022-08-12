import { Error, instonsCreatforUser, instons_create, axios_create } from "./helpAPI";
const defoltURL = "/message"



export let M_userApi = null;
export const change_M_userApi = (token, _id) => {
    M_userApi = instonsCreatforUser(defoltURL, token, _id, {
        create: function (id, dispatch) {

            return this.get('/create/' + id)
                .catch((e) => Error(e, dispatch))
        },
        get_users: function (dispatch) {
            return this.get()
                .catch((e) => Error(e, dispatch))
        },
        get_message: function (id, dispatch) {
            // console.log(id);
            return this.get('/message/' + id)
                .catch((e) => Error(e, dispatch))
        },
        get_chat: function (id, dispatch) {
            return this.get('/user/' + id)
                .catch((e) => Error(e, dispatch))
        },







        send_message: function (data, dispatch) {
            return this.post('/', ...axios_create(data))
                .catch((e) => Error(e, dispatch))
        },
        post_id: function (data, dispatch) {
            return this.post('/post_id', ...axios_create(data))
                .catch((e) => Error(e, dispatch))
        },
        remove: function (_id, dispatch) {
            return this.post('/remove', ...axios_create({ id: _id }))
                .catch((e) => Error(e, dispatch))
        },
        save_text: function (data) {
            return this.post('/textMessage', ...axios_create(data))
            //.catch((e) => Error(e, dispatch))
        },
        remove_messages: function (data, dispatch) {
            return this.post('/remove_message', ...axios_create(data))
                .catch((e) => Error(e, dispatch))
        }

        // save_text:function(data,dispatch){
        //     return this.post('/textMessage',...axios_create(data))
        //     .catch((e) => Error(e, dispatch))
        // }
    })
}


// export default instonsCreatforUser(defoltURL, messageApi,)