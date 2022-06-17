const {Schema,model, Types}=require('mongoose')

const User= new Schema({
    name:{
        type:String,
        required:true,
        unique:false
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    // message : [{type: Types.ObjectId , ref :"message"}],
    // [{id,[]}]
    message :{
        type : Array,
        required: true,
        default : [],    
    },
    status :{
        type : String,
        required:false,
        default : 'No status',
    },
    page_name:{
        type: String,
        required:true,
        unique:true
    },
    avatar:{
        type:String,
        required:false,
        default:''
    },
    isAdmin : {
        type: Boolean,
        default:false,
    },
    isBan : {
        status : {
            type : Boolean,
            default : false
        },
        reason :{
            type : String,
            required:false,
        },
        time : {
            from : {
                type:String,
                required : false
                // 23.05.2022
                
            },
            to : {
                type:String,
                required : false
                // 23.06.2022
    
            }
        },
        required:false
    }

})

module.exports = model('User',User)


const user = {
    messsages : [
        {

    id: 'sadasd',
    name : 'sadas',
     message :   [
            {
               
                text : 'asdas',
                date : '0839',
                
            },
            {
                myMessage : true,
                text : 'asldk;lasd',
                date : '0898'
            },
        ]
    }
    ]
}