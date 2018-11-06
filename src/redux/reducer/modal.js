import { MODAL } from '../../constants/ActionTypes';

const modal = {
  show: false,
  cardid: ''
}

export default function modalReducer(state = modal, action) {
  switch (action.type) {
    case MODAL.SHOW:
      return {
        show: true,
        cardid: action.payload
      }
    case MODAL.CLOSE:
      return {
        show: false,
        cardid: ''

      }
    default:
      return state
  }
}