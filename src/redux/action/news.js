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
    console.log(data)
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

export const newsAction = {
  getNewsAll,
  addNews,
  editNews,
  getOneNews
}