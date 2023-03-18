
import { useState } from 'react';
import Header from './components/Header';
import PostFeed from './components/PostFeed';
import PostForm from './components/PostForm';
import { Post } from './postInterfaces';
function App() {
  const [postList, setPostList] = useState<Post[]>([
    {"name": "Bingus", "body": "AHHHHHHH" }, {"name": "Mingus", "body": "Bingus, calm down" }
  ])

  const addNewPost = (newPost:Post) => {
    let newPosts:Post[] = [newPost,...postList]
    setPostList(newPosts)
  }
  return (
    <>
    <Header/>
    <div className=" flex flex-col items-center gap-4">
      <PostForm onSubmit={addNewPost}/>
      <PostFeed postList={postList}/>
    </div></>
  );
}

export default App;
