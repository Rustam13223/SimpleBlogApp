import { IPost } from "../../types/Post"
import Content from "./Content"
import Image from "./Image"
import CommentList from "./CommentList"

import './Post.css'

interface PostProps {
  post: IPost
}

function Post({ post }: PostProps) {
  return (
    <article>
      <header>
        <h2>{post.title}</h2>
        <Image src={post.image} />  
      </header>
      
      <Content content={post.content} />
      
      <footer>
      <CommentList comments={post.comments} />
      </footer>
      
    </article>
  )
}

export default Post