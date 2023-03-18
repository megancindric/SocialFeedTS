import React  from 'react'
import { Post } from '../postInterfaces';
import { useState } from 'react';
const PostForm = () => {

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
    }
    return ( 
        <form className='flex flex-col' onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
    <input className='border p-2 rounded-lg drop-shadow-lg' id="name" type="text" name="name" value={newPost.name} onChange={handleChange}/>
    <label htmlFor="body">Thoughts: </label>
    <input className='border p-2 rounded-lg drop-shadow-lg' id="body" type="text" name="body" value={newPost.body} onChange={handleChange}/>
        <button className='border p-2 rounded-lg drop-shadow-lg' type="submit">Create Post</button>
        </form>
     );
}
 
export default PostForm;