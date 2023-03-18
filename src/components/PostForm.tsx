import React  from 'react'
import { Post } from '../postInterfaces';
import { useState } from 'react';
interface PostFormProps {
    onSubmit: (newPost: Post) => void;
}
const PostForm = (props:PostFormProps) => {

    const [newPost, setNewPost] = useState<Post>({
        "name": "",
        "body": ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value} = e.target
        setNewPost((oldPost) => ({...oldPost, [name]: value}))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (newPost.name === "" || newPost.body === "") {
            alert("Error: Please enter a Name & Body value!")
        }
        else{
          props.onSubmit(newPost)
        setNewPost({"name": "", "body":""})  
        }
        
    }
    return ( 
        <form className='flex flex-col w-2/3 border rounded-lg p-6 bg-teal-100 gap-2 drop-shadow-xl' onSubmit={handleSubmit}>
                <label htmlFor="name" className=' text-lg'>Name: </label>
    <input className='border p-2 rounded-lg drop-shadow-lg' id="name" type="text" name="name" value={newPost.name} onChange={handleChange}/>
    <label htmlFor="body" className=' text-lg'>Thoughts: </label>
    <input className='border p-2 rounded-lg drop-shadow-lg' id="body" type="text" name="body" value={newPost.body} onChange={handleChange}/>
        <button className='border p-2 rounded-lg drop-shadow-lg bg-teal-700 text-white' type="submit">Create Post</button>
        </form>
     );
}
 
export default PostForm;