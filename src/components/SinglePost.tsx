import React from 'react'
import { Post } from '../postInterfaces';

interface PostProps{
    post:Post
}
const SinglePost: React.FC<Post> = (props) => {
    return ( <div className='flex flex-col border rounded-lg bg-teal-100 p-8 drop-shadow-xl gap-2'><h1 className=' text-lg'>{props.name}</h1>
    <p className='text-md'>{props.body}</p></div> );
}
 
export default SinglePost;