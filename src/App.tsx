import { useState } from 'react'
import PostList from './components/PostList'
import postsJSON from './data/posts.json'
import { IPost } from './types/Post'

function App() {
  const [posts] = useState<IPost[]>(postsJSON)

  return (
    <div className="container" data-theme="dark">
      <PostList posts={posts} />
    </div>
  )
}

export default App
