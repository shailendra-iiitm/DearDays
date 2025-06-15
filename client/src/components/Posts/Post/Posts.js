import Post from './Post/Post';

const Posts = () => {
    const classes =useStyles();
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