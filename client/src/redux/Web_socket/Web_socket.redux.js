export let soket = null;
let   dispatch  = null
const state1 = {
    connection: false,
    _id: null,
    soket: {},
  

}

const P = {
    ADD_ID_S: 'ADD_ID_S',
    ADD_ID: 'ADD_ID',
    SEND: 'SEND',
    TEST: 'TEST',
    MESSAGE:'MESSAGE',
    SOKET_ADD:'SOKET_ADD',
    CLOSE: 'CLOSE'
}
export const WebSocketRedux = (state = state1, action) => {
    switch (action.type) {
        case P.ADD_ID:
            soket.send(JSON.stringify({ id: action.id, params: P.ADD_ID_S }))
            !dispatch &&  (dispatch = action.dispatch)
            // console.log( dispatch);
            return state
        case P.SEND:
            console.log(action);
            soket.send(JSON.stringify({ data:action.data, params: P.SEND }))
            return state
        case P.MESSAGE:
            // console.log(action);
            return state
        case P.TEST:
            // console.log(action);
            return state
        case P.CLOSE:
            return state1
        default: return state
    }
}
// soket.close()

export const connection = S => {
    soket = S;

    soket.onopen = () => {
        // console.log(true);
    }
    soket.addEventListener('message', e => {
        // console.log(JSON.parse(e.data.toString()));
        const data =  JSON.parse(e.data.toString())
        // console.log(data.params);
        // console.log(dispatch);
        // console.log(data);
    //     console.log(dispatch);
    //     dispatch &&  console.log(12);
    data.params==P.SOKET_ADD &&  dispatch({type :  data.params,data:data.data})

    })
}
export const close_conection = () => {
    soket.close()
    soket.onclose = () => {
        // console.log(false)
        return { type: P.CLOSE }
    }
}
export const R_FU_SOKET_ID = (id,dispatch) => {
    return { id, type: P.ADD_ID,dispatch }
}
export const R_FU_SOKET_SEND_MESSAGE = (data) => {
   
    return{data,type:P.SEND}
}




// export const send_socket = () => {
//     // soket.addEventListener('message',(e)=>{
//     //     console.log( JSON.parse(e.data));
//     // })
//     soket.onmessage(function (e) {
      
//         // console.log(JSON.parse(e.data));
//     })


// }