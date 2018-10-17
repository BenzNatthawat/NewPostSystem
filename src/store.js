import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from './redux/reducer'

// config persist 
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['Login'] //เลือก state ที่จะเก็บไว้ใน localStorage 
}

//สร้าง persistedRuducer 
const persistedReducer = persistReducer(persistConfig,rootReducer)

export default () => {
  // สร้าง store โดยการ ใช้ persistedReducer แทน rootReducer 
  // และใส่ thunk ลง applyMiddleware 
  let store = createStore(persistedReducer,compose(
        applyMiddleware(thunk)))
  let persistor = persistStore(store)
  store.subscribe(() => {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
      // console.log('Store', store.getState())
    }
  })
  return { store,persistor }
}