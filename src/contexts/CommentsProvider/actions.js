import * as types from './types';

export const loadComments = async (dispatch) => {

  const commentsRequest = await fetch('https://jsonplaceholder.typicode.com/comments');
  const commentsResult = await commentsRequest.json();

  dispatch({ type: types.COMMENTS_ACTIONS.COMMENT_SUCCESS, payload: commentsResult })
}