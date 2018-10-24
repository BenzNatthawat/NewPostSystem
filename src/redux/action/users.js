import { Service } from '../../service';

const addUser = (data) => async (dispatch) => {
  try{
    const response = await Service.Users.addUser(data)
    console.log(response)
  }catch(err){
    console.log("ACTION_ADDUSERS: ", err)
  }
}

export const userAction = {
  addUser
}