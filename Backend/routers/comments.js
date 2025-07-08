const {Router} = require('express');
const commentrouter = Router()
const {Commentsfetch, CommentCreate} = require('../queries')


commentrouter.get('/:postid/comment', async (req, res)=> {
    const comments = await Commentsfetch(Number(req.params.postid))
    console.log(comments)
    return res.json(comments)
})



commentrouter.post('/:postid/comment', async (req, res)=> {
    await CommentCreate(req.body.comment, req.user.username, Number(req.params.postid));
    const comments = await Commentsfetch(Number(req.params.postid))
    console.log(comments)
    return res.json(comments)
})


module.exports = commentrouter;