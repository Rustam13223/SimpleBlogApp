import { IComment } from "../../types/Post"

interface CommentProps {
  comment: IComment
}

function Comment({ comment }: CommentProps) {
  return (
    <div className="headings">
      <p className="username"><b>{comment.username}</b></p>
      <p className="comment"><i>{comment.text}</i></p>
    </div>
  )
}

export default Comment