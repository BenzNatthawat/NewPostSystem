import {NEWS} from '../../constants/ActionTypes'

const news = {
  data: [],
  newsone: {}
}

export default function NewsReducer(state = news, action){
  switch(action.type){
    case NEWS.GET:
    return {
      ...state,
      data: action.payload
    }
    case NEWS.RELOAD:
    return{
      ...state,
      data: action.payload
    }
    default:
    return state
  }
}