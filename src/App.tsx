
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
    let newPosts:Post[] = [...postList, newPost]
    setPostList(newPosts)
  }
  return (
    <div className=' bg-orange-50 min-h-screen'>
    <Header/>
    <div className=" flex flex-col items-center gap-10">
      <PostForm onSubmit={addNewPost}/>
      <PostFeed postList={postList}/>
    </div></div>
  );
}

export default App;
