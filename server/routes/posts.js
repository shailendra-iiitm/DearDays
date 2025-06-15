import express from 'express';
import {getPosts} from '../controllers/posts.js';
import { get } from 'mongoose';

const router=express.Router();
router.get('/',getPosts);


export default router;