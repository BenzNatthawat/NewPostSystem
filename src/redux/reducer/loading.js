import { LOADING } from '../../constants/ActionTypes';

const loading = false

export default function loginReducer(state = loading, action) {
  switch (action.type) {
    case LOADING.OPEN:
      return {
        loading: true
      }
    case LOADING.CLOSE:
      return {
        loading: false
      }
    default:
      return state
  }
}