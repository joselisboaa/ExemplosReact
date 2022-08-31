import * as types from './types'

export const Reducer = (state, action) => {

  switch(action.type) {
    case types.COUNTER_ACTIONS.INCREMENT: {
      return {...state, counter: state.counter + 1}
    }
    case types.COUNTER_ACTIONS.DECREMENT: {
      return {...state, counter: state.counter - 1}
    }
  }

  return {...state};
}