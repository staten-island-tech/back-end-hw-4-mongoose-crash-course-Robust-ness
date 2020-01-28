const express = require('express')

const router = express.Router()

const Post = require('../models/Post')

router.get('/', async (req, res) => {
    try{
        const posts = await Post.find()
        res.json(posts)
    }catch(e) {
        res.json({message: e})
    }
})

router.post('/', async (req, res) => {
    // res.send('hello')
    // console.log(req.body)
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })

    try{
        const savedPost = await post.save()
        // .then(data => {
        //     res.json(data)
        // })
        // .catch(err => {
        //     res.json({message:err})
        // })
        res.json(savedPost)
    }catch(e) {
        res.json({message: e})
    }
})

router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId)
        res.json(post)
    } catch (error) {
        res.json({message: error})
    }
    
})

router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.remove({_id: req.params.postId})
        res.json(removedPost)
    } catch (error) {
        res.json({message:error})
    }
})

router.patch('/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne({_id: req.params.postId}, {$set: {title: req.body.title}})
        res.json(updatedPost)
    } catch (error) {
        res.json({message:error})
    }
})

module.exports = router