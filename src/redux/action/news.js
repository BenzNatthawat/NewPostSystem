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

const addNews = (data, history) => async (dispatch) => {
  try{
    if(localStorage.userId_login)
      data.user = parseInt(localStorage.userId_login)
        dispatch({type: type.LOADING.OPEN})    
        const response = await Service.News.addNews(data)
        console.log(response)
        dispatch(getNewsAll())
        dispatch({type: type.LOADING.CLOSE})
      history.push('/')
  }catch(err){
    console.log("ACTION_ADDNEWS: ", err)
  }
}

const DeleteNews = (data) => async (dispatch) => {
  try{
    dispatch({type: type.LOADING.OPEN})
    const response = await Service.News.deleteNews(data)
    console.log(response)
    dispatch(getNewsAll())
    dispatch({type: type.LOADING.CLOSE})
  }catch(err){
    console.log("ACTION_GETNEWSgetNews_only_user: ", err)
  }
}

const editNews = (data) => async (dispatch) => {
  try{
    dispatch({type: type.LOADING.OPEN})
    const response = await Service.News.editNews(data)
    console.log(response)
    dispatch(getNewsAll())
    dispatch({type: type.LOADING.CLOSE})
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
  DeleteNews,
  editNews,
  getOneNews,
  getNews_only_user
}