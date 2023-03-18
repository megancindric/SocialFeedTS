import React from 'react'
import { Post, PostList } from '../postInterfaces';
import SinglePost from './SinglePost';

const PostFeed: React.FC<PostList> = (props) => {
    return ( <div className=' flex flex-col gap-4 w-2/3'>
        {props.postList.map((post:Post) => (
            <SinglePost name={post.name} body={post.body}/>
        ))}
    </div> );
}
 
export default PostFeed;