const {Router} = require('express');
const commentrouter = Router()
const {Commentsfetch, CommentCreate} = require('../queries')



commentrouter.get('/:postid/comment', (req, res) => {
    const comments = Commentsfetch()
    res.json(comments)
})

commentrouter.post('/:postid/comment', (req, res)=> {
    CommentCreate(req.body.comment, req.user.id, req.params.postid);
})



module.exports = commentrouter;