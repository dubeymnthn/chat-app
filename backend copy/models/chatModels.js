const { default: mongoose } = require('mongoose');
const mongooose = require('mongoose');

const chatModel = mongoose.Schema(
    {
        chatName: { type:String, trim:true},
        isGroupChat: { type:Boolean, trim:true,default:false},
        users:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"User",
            },
        ],
        LatestMessage: { 
            type:mongoose.Schema.Types.ObjectId,
            ref:"Message",
        },
        groupadmin:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
        }

    },{
        timestamps:true
    }
)

const Chat = mongoose.model("Chat",chatModel);

module.exports = Chat;