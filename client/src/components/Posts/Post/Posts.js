import Post from './Post/Post';
import { useSelector} from 'react-redux';

const Posts = () => {
    const classes =useStyles();
    const posts=useSelector((state) => state.posts);
    console.log(posts);
    return (
        <>
            <h2>POST</h2>
            {/* Form elements will go here */}
            <Post></Post>
            <Post/>
        </>
    );
}

export default Posts;