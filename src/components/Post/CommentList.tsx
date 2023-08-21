import { IComment } from "../../types/Post"
import Comment from "./Comment"

interface CommentListProps {
  comments: IComment[]
}

function CommentList({ comments }: CommentListProps) {
  return (
    <div className="">
      <h3>Comments:</h3>
      {comments.map((comment, index) => (
          <Comment comment={comment} key={index}/>
      ))}
    </div>
  )
}

export default CommentList