const {Schema,model,Types} = require('mongoose')


const postSchema = new Schema({
    title: {
        type:String,
        required:true,
    },
    hashTags:{
        type:Array
    },
    owner: {
        type:Types.ObjectId,
        ref:'User'
    }
})

module.exports = model('Post',postSchema)