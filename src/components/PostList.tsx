import { IPost } from "../types/Post"
import Post from "./Post/Post"

interface PostListProps {
  posts: IPost[]
}

function PostList({ posts }: PostListProps) {
  return (
    <>
      {posts.map((post, index) => (
        <Post post={post} key={index} />
      ))}
    </>
  )
}

export default PostList