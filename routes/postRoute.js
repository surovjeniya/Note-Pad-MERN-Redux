const {Router} = require('express')
const res = require('express/lib/response')
const router = Router()
const Post = require('../models/Post')


'/api/post'

router.post('/create-post',async (req,res) => {
    try {
        const {title,hashTags,userId} = req.body
        const post = new Post({
            title,hashTags,owner:userId
        })
        await post.save()
        res.status(201).json({
            message: 'note added'
        })

    } catch(e) {
        res.status(500).json({
            message:"Create post error",
            error:e.message
        })
    }
})

router.get('/post-list/',async(req,res) => {
    try {
       const {userId} = req.query
       const posts = await Post.find({
           owner:userId
       })
       res.status(200).json({
           message:'Notes updated',
           posts
       })
    } catch(e) {
        res.status(500).json({
            message:'Error updating.Try again',
            error:e.message
        })
    }
})

router.delete('/delete-post/:id',async (req,res) => {
    try {
        await Post.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message:'Post wil be deleted'
        })

    }catch(e) {
        res.status(500).json({
            message:'deleting error',
            error:e.message
        })
    }
})



module.exports = router
