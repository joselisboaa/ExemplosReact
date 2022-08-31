import { useReducer } from "react";
import { CommentsContext } from "./context";
import { CommentsReducer } from "./reducer";
import { commentData } from "./data";

export const CommentProvider = ({ children }) => {
  
  const [commentState, commentDispatch] = useReducer(CommentsReducer, commentData)

  return (
    <CommentsContext.Provider value={{ commentState, commentDispatch }}>
      {children}
    </CommentsContext.Provider>
  )
}