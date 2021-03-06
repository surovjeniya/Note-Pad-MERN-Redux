const {Schema,model,Types} = require('mongoose')


const userSchema = new Schema({
    email: {
        type:String,
        required:true,
        unique:true
    },
    password: {
        type:String,
        required:true
    },
    login: {
        type:String,
        required:true,
        unique:true
    },
    posts: [
        {
            type:Types.ObjectId,
            ref:'Post'
        }
    ]
})

module.exports = model('User',userSchema)