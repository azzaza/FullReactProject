
export const them_basa = {
    black:   [
        {
            color : '#1F2833',
            name : 'themaTop',

        },
        {
            color:'#0B0C10',
            name:'themaMain  '

        },
        {
            color : '#C5C6C7',
            name:'themaText'

        },
        {
            color:'#66FCF1',
            name:'themaBorder'

        },

    ],
    light:   [
        {
            color : '#CAEBF2',
            name : 'themaTop',

        },
        {
            color:'#EFEFEF',
            name:'themaMain'

        },
        {
            color : '#474747',
            name:'themaText'

        },
        {
            color:'#FF3B3F',
            name:'themaBorder'

        },
      
      
       

    ],
    // def:   [{
    //     color : '#1F2833',
    //     name : 'themaTop',

    // },
    // {
    //     color:'#0B0C10',
    //     name:'themaMain  '

    // },
    // {
    //     color : '#C5C6C7',
    //     name:'themaText'

    // },
    // {
    //     color:'#66FCF1',
    //     name:'themaBorder'

    // }]
}


const state1 = {
    // _id : 'asdasd',
    themaTop : '#1F2833',
    themaMain : '#0B0C10',
    themaText : '#C5C6C7',
    themaBorder:'#66FCF1'


}
const D={
    CHNAGE_THEMA:'CHNAGE_THEMA'
}

export const SettingsRedux=(state = state1,action)=>{
    switch(action.type){
        case D.CHNAGE_THEMA:
            const changed_state={}
            them_basa[action.thema].map(e=>{
                changed_state[e.name]=e.color
            })
            return changed_state
        default :return state

    }
}



export const R_FU_SETTONGS_CHNAGE_THEMA=(thema=>({type:D.CHNAGE_THEMA,thema}))


