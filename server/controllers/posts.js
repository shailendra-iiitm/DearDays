import postMessage from '../models/postMessage.js';

export const getPosts =async (req, res) => {
    try {
        const posts = await postMessage.find();
        console.log(posts);
        if (!posts.length) {
            return res.status(404).json({ message: 'No posts found' });
        }
        res.status(200).json(posts);

    }catch (error) {
        res.status(404).json({ message: error.message });
    }}

export const createPost = async (req, res) => {
    try {
        const post = req.body;
        const newPost = new postMessage(post);
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}