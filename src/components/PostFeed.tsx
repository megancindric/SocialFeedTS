import React from 'react'
import { Post, PostList } from '../postInterfaces';
import SinglePost from './SinglePost';

const PostFeed: React.FC<PostList> = (props) => {
    return ( <div className=' flex flex-col items-center gap-6 w-1/2'>
        {props.postList.map((post:Post, index) => (
            <SinglePost key={index} name={post.name} body={post.body}/>
        )).reverse()}
    </div> );
}
 
export default PostFeed;