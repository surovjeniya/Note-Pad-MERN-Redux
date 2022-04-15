const {Schema,model} = require('mongoose')


const postSchema = new Schema({
    title: {
        type:String,
        required:true,
    },
    important: {
        type:Boolean,
        required:true,
        default:false
    },
    important: {
        type:Boolean,
        required:true,
        default:false
    },
})

module.exports = model('Post',postSchema)