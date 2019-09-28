const hots_db = require('./hots_db');

// Users
const getUsers = async () => {
    const users = await hots_db('users')
        .select('*')

    return users;
}

const getUserByEmail = async email => {
    const user = await hots_db('users')
        .select('*')
        .where('email', email)
    return user;
}

// Posts
const getPosts = async () => {
    const posts = await hots_db('posts')
        .select('*')

    return posts;
}

const createPost = async (post) => {
    const postId = await hots_db('posts')
        .returning('id')
        .insert({
            post
        })

    return postId;
}

const getPostById = async (id) => {
    const post = await hots_db('posts')
        .select('*')
        .where('id', id)

    return post;
}

const deletePostById = async (id) => {
    const postId = await hots_db('posts')
        .returning('id')
        .where('id', id)
        .del()

    return postId;
}

module.exports = {
    getUsers,
    getUserByEmail,


    getPosts,
    createPost,
    getPostById,
    deletePostById
}