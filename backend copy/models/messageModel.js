const mongooose= require('mongoose');
const messageModel= mongooose.Schema(
    {
        sender:{type:mongooose.Schema.Types.ObjectId,ref:"User"},
        content: {type: String,trim:true},
        chat: {type: mongoose.Schema.Types.ObjectId,ref:"User"},

    },
    {
        timestamps:true
    }
)

const Message = mongooose.model('Message',messageModel);

module.exports = Message;