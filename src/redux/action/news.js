import * as type from '../../constants/ActionTypes';
import { Service } from '../../service';

const allNews = (data) => ({
  type: type.NEWS.GET,
  payload: data
})

const reloadNews = () => ({
  type: type.NEWS.RELOAD,
  payload: []
})

const confirmDelete = () => ({
  type: type.ALERTCONFIRM.OPEN,
  payload: true,
  text: 'You want to delete?'
})

const closeConfirmDelete = () => ({
  type: type.ALERTCONFIRM.CLOSE,
  payload: false,
  text: ''
})

export const getNewsAll = () => async (dispatch) => {
  try{
    const response = await Service.News.getNewsAll()
    dispatch(allNews(response.data))
    
  }catch(err){
    console.log("ACTION_GETNEWSALL: ", err)
  }
}

export const deleteNews =  (id) => async (dispatch) => {
  try{
  const response = await Service.News.deleteNews(id)
  if(response.data.success){
    dispatch(closeConfirmDelete())
    dispatch(reloadNews())
  }
  }catch(err){
    console.log("ACTION_DELETENEWS: ", err)
  }
} 

export const showDeleteConfirm = () => (dispatch) => {
  dispatch(confirmDelete())
}

export const addNews = (data) => async (dispatch) => {
  try{
    console.log(data)
    const response = await Service.News.addNews(data)
    console.log(response)
  }catch(err){
    console.log("ACTION_ADDNEWS: ", err)
  }
}

export const editNews = (data) => async (dispatch) => {
  try{
    const response = await Service.News.editNews(data)
    console.log(response)
  }catch(err){
    console.log("ACTION_EDITNEWS: ", err)
  }
}

export const newsAction = {
  getNewsAll,
  deleteNews,
  showDeleteConfirm,
  addNews,
  editNews
}