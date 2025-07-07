const {Router} = require('express');
const postsrouter = Router();
const cors = require('cors')
postsrouter.options('/:postid', cors())
postsrouter.use(cors())
const {deletePost, EditPost, GetPosts, CreatePost, GetUserPosts} = require('../queries')

postsrouter.delete('/:postid', (req,res)=>{
    deletePost(req.params.postid)
})

postsrouter.put('/:postid', async (req,res)=>{
    try {
await EditPost(req.params.postid, req.body.post)
return res.status(201).json({message: "edited"})
} catch(err) {
    res.status(401).json({message:err.message})
}})


postsrouter.get('/posts', (req,res)=> {
    const posts = GetPosts()
    res.json(posts)


})

postsrouter.post('/posts', async (req,res)=> {
    try {
     const post = req.body.post
     const userid = req.user.id
     await CreatePost(post, userid)
     return res.status(201).json({message: "created"})
    } catch(err) {
        return res.status(401).json({message: err.message})
    }
})


postsrouter.post('/profile', (req,res)=>{
   const userposts = GetUserPosts(req.user.id)
   res.json(userposts)
})


module.exports = postsrouter;