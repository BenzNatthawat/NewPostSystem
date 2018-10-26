import { Service } from '../../service';
import * as type from '../../constants/ActionTypes';

const setAuth = (data) => ({
  type: type.LOGIN.AUTH,
  payload: data.id
})

const login = (data, history) => async (dispatch) => {
  try{
    const response = await Service.Login.login(data)
    if(response){
      dispatch({type: type.LOADING.OPEN})
      dispatch(setAuth(response.data))
      localStorage.setItem("userId_login",response.data.id)
      dispatch({type: type.LOADING.CLOSE})
      history.push('/')
    }else{
      console.log("ERROR_login")
    }
  }catch(err){
    console.log("ACTION_LOGIN: ", err)
  }
}

export const user_login_Action = {
  login
}