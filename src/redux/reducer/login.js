import { LOGIN } from '../../constants/ActionTypes';

const login = '';

export default function loginReducer(state = login, action) {
  switch (action.type) {
    case LOGIN.AUTH:
      return action.payload
    default:
      return state
  }
}