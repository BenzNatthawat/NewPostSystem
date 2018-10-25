import { Service } from '../../service';

const addUser = (data, history) => async (dispatch) => {
  try{
    const response = await Service.Users.addUser(data)
    console.log(response)
    localStorage.setItem("userId_login",response.data.id)
    history.push('/')
  }catch(err){
    console.log("ACTION_ADDUSERS: ", err)
  }
}

export const userAction = {
  addUser
}