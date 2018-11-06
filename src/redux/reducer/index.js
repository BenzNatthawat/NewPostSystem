import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'

import News from './news';
import Users from './users';
import Loading from './loading';
import Login from './login';
import modal from './modal';

const rootReducer = combineReducers({
  form: reduxFormReducer,
  News,
  Users,
  Login,
  Loading,
  modal,
})

export default rootReducer;