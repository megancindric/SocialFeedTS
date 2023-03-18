import React from 'react'
import { Post } from '../postInterfaces';
interface PostListProps{ postList:Post[]}
const PostFeed: React.FC<PostListProps> = (props) => {
    return ( <div>
        {props.postList.map((post:Post) => (
            <><h1>{post.name}</h1>
            <p>{post.body}</p></>
        ))}
    </div> );
}
 
export default PostFeed;