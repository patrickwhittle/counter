//import { List, Map } from 'immutable'
import { INCREMENT,  DECREMENT} from '../actions/actionTypes'

export const counter = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      console.log(state)
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
} 