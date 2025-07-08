const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();



async function Commentsfetch(PostId) {
    const rows = await prisma.comment.findMany({
        where:{
            PostId
        }
    })
    console.log(rows)
    return rows
};


async function CommentCreate(comment, username, PostId) {
    const rows = await prisma.comment.create(
        {  data: {
                comment,
                username,
                PostId }
        },
    )
    console.log(rows)
}

async function deletePost(PostId) {
    await prisma.post.delete(
        {
            where: {
                id: PostId
            }
        }
    )
}

async function EditPost(PostId, post) {
    await prisma.post.update({
        where: {
            id: PostId
        },
        data: {
            Post: post}})
}

async function CreatePost(Post, AuthorId, title) {
    console.log("post request recieved")
  const post = await prisma.post.create({
    data: {
        AuthorId,
        Post,
        title
    }
   })
   console.log(post)
}
async function Signup(email, password, username) {
   const user = await prisma.user.create({
        data: {
            email, password, username
        }
    })
    console.log(user)
}

async function SearchById(id) {
    const rows = await prisma.user.findUnique({
        where: {
            id
        }
})
return rows
}
async function SearchByuser(email, password) {
    const rows = await prisma.user.findUnique({
        where: {
            email, password

        }
    })
    return rows;
}
async function GetPosts() {
    const rows = await prisma.post.findMany()
    console.log(rows)

    return rows;
    
}

async function GetUserPosts(id) {
     const rows = await prisma.post.findMany({
        where: {
            AuthorId: id
        }
     })
     return rows
}

module.exports = {
    Commentsfetch,
    CommentCreate,
    deletePost,
    EditPost, GetPosts, CreatePost, GetUserPosts, Signup, SearchByuser, SearchById
}