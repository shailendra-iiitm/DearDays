export default (posts=[],action)=>{
    switch(action.type){
        case 'FETCH_ALL':
            return {
                ...posts,
                posts: action.payload
            };
        case 'CREATE':
            return {
                ...posts,
                posts: [...posts.posts, action.payload]
            };
        case 'UPDATE': 
            return {
                ...posts,
                posts: posts.posts.map((post) => post._id === action.payload._id ? action.payload : post)
            };
        case 'DELETE':
            return {
                ...posts,
                posts: posts.posts.filter((post) => post._id !== action.payload)
            };
        default:
            return posts;
    }
}