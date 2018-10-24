import axios from 'axios';
import config from './config'

export default {
  login: async (data,history) => {
    try {
      return await axios.post(`${config.baseURL}/user/auth`, data)
    } catch (error) {
      console.log('SERVICE_ADDNEWS: ', error)
    }
  },
}