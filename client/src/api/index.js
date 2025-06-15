import axios from 'axios';

const url=process.env.REACT_APP_API_URL || 'http://localhost:3000/posts';

export const fetchPosts = async () => axios.get(url);