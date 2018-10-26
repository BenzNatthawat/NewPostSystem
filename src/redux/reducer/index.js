import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'

import News from './news';
import Users from './users';
import Loading from './loading';
import Login from './login';

const rootReducer = combineReducers({
  form: reduxFormReducer,
  News,
  Users,
  Login,
  Loading,
})

export default rootReducer;