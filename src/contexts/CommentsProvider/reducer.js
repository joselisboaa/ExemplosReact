import { COMMENTS_ACTIONS } from "./types";

export const CommentsReducer = (state, action) => {

  switch(action.type) {
    case COMMENTS_ACTIONS.COMMENT_SUCCESS: {
      console.log('teste')
      return {...state, comments: action.payload};
    }
    case COMMENTS_ACTIONS.COMMENT_REJECTED: {
      console.log('Erro');
      return {...state};
    }
  }

  return {...state};
}