import React from 'react'
import { Post } from '../postInterfaces';

interface PostProps{
    post:Post
}
const SinglePost: React.FC<Post> = (props) => {
    return ( <><h1>{props.name}</h1>
    <p>{props.body}</p></> );
}
 
export default SinglePost;