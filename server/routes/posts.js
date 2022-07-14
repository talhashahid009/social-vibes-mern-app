import express from 'express';
import { getPosts, createPost, updatePost, removePost, likePost, getPost, getPostsBySearch, commentPost } from '../controllers/posts.js';
import auth from '../middleware/auth.js';

const router = express.Router();

//routes for post operations

router.get('/search', getPostsBySearch);

router.get('/', getPosts);

router.get('/:id', getPost);

router.post('/', auth, createPost);

router.patch('/:id', auth, updatePost);

router.delete('/:id', auth, removePost);

router.patch('/:id/likePost', auth, likePost);

router.patch('/:id/commentPost', auth, commentPost);

export default router;