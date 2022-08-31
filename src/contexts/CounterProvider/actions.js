import * as types from './types'

export const incrementCounter = (dispatch) => {
  dispatch({ type: types.COUNTER_ACTIONS.INCREMENT })
};

export const decrementCounter = (dispatch) => {
  dispatch({ type: types.COUNTER_ACTIONS.DECREMENT })
};