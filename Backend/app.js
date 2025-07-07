// 1 front end : who want to read and comment basicaly user view  /require username of teh user user who commented / date and timestamp for each post/comment / post should have a title / 
// 2nd fe : for writers to write and edit posts and manage it. /draft for unpublished / and button to publish , unpublish and NEW post button with a new page and manage commment
// 1 backend : for all of this managing.
// user model with authors and reader seperate db
// routes need protection via authentiation using JWT on logout remove the user from jwt means that ? WHAT token : empty
// store JWT in localStorage 
// fetch api endpoint display the current result
const express = require('express')
const app = express()
const {body, validationResult} = require('express-validator')
const path = require('node:path');
const {commentrouter} = require('./routers/comments')
const {postsrouter} = require('./routers/posts')
const {authRouter, VerifyToken} = require('./routers/authorisation')


app.use('/api', VerifyToken);
app.use('/api', commentrouter)
app.use('/api', postsrouter)
app.use('/auth', authRouter)



const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=> {
    console.log(`listening to ${PORT}`)
})







