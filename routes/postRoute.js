const {Router} = require('express')
const router = Router()
const Post = require('../models/Post')



router.get('/post-list',async (req,res) => {
    try {
        const posts = await Post.find({})
        res.status(200).json({
            message:'Posts loaded.',
            posts
        })
    } catch(e) {
        res.status(500).json({
            message:'Posts not loaded.Try again',
            error:e.message
        })
    }
})

router.post('/create-post',async (req,res) => {
    try {
        const {title} = req.body
        const post = await new Post({
            title
        })
        await post.save()
        res.status(201).json({
            message:'Port'
        })
    } catch(e) {
        res.status(500).json({
            message:"Create post error",
            error:e.message
        })
    }
})

router.put('/important-post',async (req,res) => {
    try {
        const {id} = req.body
        const candidate = await Post.findById(id)

        await Post.findByIdAndUpdate(id,{
            important:!candidate.inportant
        })
        res.status(201).json({
            message:candidate.important ? 'Post important' : 'Post unimportant'
        })
    } catch(e) {
        res.status(500).json({
            message:"Important post error",
            error:e.message
        })
    }
})

router.put('/done-post',async (req,res) => {
    try {
        const {id} = req.body

        const candidate = await Post.findById(id)
        await Post.findByIdAndUpdate(id,{
            done:!candidate.done
        })

        res.status(200).json({
            message:candidate.done ? 'Post done' : 'Post undone'
        })
    } catch(e) {
        res.status(500).json({
            message:'Done post error',
            error:e.message
        })
    }
})

router.delete('/delete-post/:id',async (req,res) => {
    try {
        await Post.findByIdAndRemove(req.params.id)
        res.status(200).json({
            message:'Post will be deleted'
        })
    } catch(e) {
        res.status(500).json({
            message:'Delete error.Try again',
            error:e.message
        })
    }
})


module.exports = router
