import { useEffect, useState } from 'react';
import { PostItem } from './conponents/post-item'
import './App.css';

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then((data) => {
        setPosts(data)
      })
  }, [])

  useEffect(() => {

  }, [])

  return (
    <div>
      <input className="filter" type="text" />
      {
        posts.map((post) => (
          <PostItem data={post} key={post.id} />
        ))
      }
    </div>
  );
}

export default App