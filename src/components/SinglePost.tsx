import React, {useState} from 'react'
import { Post } from '../postInterfaces';
import LikeButtons from './LikeButtons';

const SinglePost: React.FC<Post> = (props) => {

    return ( <div className='flex flex-row flex-wrap w-2/3 justify-between border rounded-lg bg-teal-100 p-8 drop-shadow-xl gap-2'>
        <div className='flex flex-col flex-1 gap-3 '>
          <h1 className=' text-xl'>{props.name}</h1>
    <p className='text-md'>{props.body}</p>  
        </div>
        <div className='flex flex-row justify-end gap-2 items-center flex-1'>
            <LikeButtons/>
</div>
    </div> );
}
 
export default SinglePost;