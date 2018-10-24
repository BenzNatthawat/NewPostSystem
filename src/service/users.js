import axios from 'axios';
import config from './config'

export default {
  addUser: async (data) => {
    try {
      return await axios.post(`${config.baseURL}/user/`, data)
    } catch (error) {
      console.log('SERVICE_ADDUSER: ', error)
    }
  }
}