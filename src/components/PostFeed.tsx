import React from 'react'
import { Post, PostList } from '../postInterfaces';
import SinglePost from './SinglePost';

const PostFeed: React.FC<PostList> = (props) => {
    return ( <div>
        {props.postList.map((post:Post) => (
            <SinglePost name={post.name} body={post.body}/>
        ))}
    </div> );
}
 
export default PostFeed;