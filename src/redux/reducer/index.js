import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'

import News from './news';

const rootReducer = combineReducers({
  form: reduxFormReducer,
  News,
})

export default rootReducer;