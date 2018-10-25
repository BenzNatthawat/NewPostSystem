import * as type from '../../constants/ActionTypes';
import { Service } from '../../service';

const allNews = (data) => ({
  type: type.NEWS.GET,
  payload: data
})

const oneNews = (data) => ({
  type: type.NEWS.GET,
  payload: data
})

const allNews_user = (data) => ({
  type: type.NEWS.USER,
  payload: data
})

const getNewsAll = () => async (dispatch) => {
  try{
    const response = await Service.News.getNewsAll()
    dispatch(allNews(response.data))
    
  }catch(err){
    console.log("ACTION_GETNEWSALL: ", err)
  }
}

const getOneNews = (data) => async (dispatch) => {
  try{
    const response = await Service.News.getOneNews(data)
    dispatch(oneNews(response.data))
    
  }catch(err){
    console.log("ACTION_GETONENEWSALL: ", err)
  }
}

const addNews = (data) => async (dispatch) => {
  try{
    console.log(localStorage.userId_login)
    if(localStorage.userId_login)
      data.user = parseInt(localStorage.userId_login)
    const response = await Service.News.addNews(data)
    console.log(response)
  }catch(err){
    console.log("ACTION_ADDNEWS: ", err)
  }
}

const editNews = (data) => async (dispatch) => {
  try{
    const response = await Service.News.editNews(data)
    console.log(response)
    dispatch(getNewsAll())
  }catch(err){
    console.log("ACTION_EDITNEWS: ", err)
  }
}

const getNews_only_user = () => async (dispatch) => {
  try{
    const response = await Service.News.getNews_only_user(localStorage.userId_login)
    dispatch(allNews_user(response.data))
  }catch(err){
    console.log("ACTION_GETNEWSgetNews_only_user: ", err)
  }
}

export const newsAction = {
  getNewsAll,
  addNews,
  editNews,
  getOneNews,
  getNews_only_user
}