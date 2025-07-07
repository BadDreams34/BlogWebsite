const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();


async function Commentsfetch() {
    const rows = await prisma.findMany()
    return rows
};

async function CommentCreate(comment, UserId, PostId) {
    const rows = await prisma.comment.create(
        {  data: {
                comment,
                UserId,
                PostId }
        },
    )
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

async function CreatePost(Post, AuthorId) {
   await prisma.post.create({
    data: {
        AuthorId,
        Post
    }
   })
}
async function Signup(email, password, username) {
    await prisma.user.create({
        data: {
            email, password, username
        }
    })
}
async function SearchById(id) {
    const rows = await prisma.user.findUnique({
        where: {
            id
        }
})
return rows}
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