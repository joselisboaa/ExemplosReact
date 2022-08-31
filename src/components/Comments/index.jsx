import { useEffect, useContext } from "react";
import { loadComments } from "../../contexts/CommentsProvider/actions";
import { CommentsContext } from "../../contexts/CommentsProvider/context"


export const Comments = () => {

  const commentContext = useContext(CommentsContext)
  const {commentState, commentDispatch} = commentContext;

  useEffect(() => {
    loadComments(commentDispatch);
  }, [commentDispatch])

  return (
    <ul>
      {commentState.comments.map(comment => (
        <li key={comment.userId}>{comment.email}</li>
      ))}
    </ul>
  )
}