
import { useState } from 'react';
import Header from './components/Header';
import PostFeed from './components/PostFeed';
import { Post } from './postInterfaces';
function App() {
  const [postList, setPostList] = useState<Post[]>([
    {"name": "Bingus", "body": "AHHHHHHH" }
  ])
  return (
    <>
    <Header/>
    <div className=" flex flex-col">
      <h1 className=' text-2xl font-sans text-cyan-600'>voidScreams</h1>
      <PostFeed postList={postList}/>
    </div></>
  );
}

export default App;
