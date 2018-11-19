import React, { useState } from 'react'

  /*
  | สร้าง component ModalStoreContext 
  */
const ModalStoreContext = React.createContext(); 

  /*
    | สร้าง component ModalStoreProvider สำหรับคุมเพื่อใช้งาน ModalStoreConsumer
    | ---- การใช้งาน ----
    | <ModalStoreProvider></ModalStoreProvider> ( แนะนำให้คุม <App/> )
  */
export const ModalStoreProvider = ({ children }) => {
  const [Modal, setModal] = useState({
      id: '',
      show: false,
      message: 'ท่านต้องการที่จะลบ ใช่หรือไม่',
      functionGql: ''
  })
  const store = {
    Modal,
    submitModal: ( id='', show=false, message='ท่านต้องการที่จะลบ ใช่หรือไม่', functionGql='' ) => {
      /* ฟังก์ชันกำหนดค่า state รับค่า 4 ค่า
        | id          : id ต้องการให้เกิดคำสั่ง ไม่มีค่าเริ่มต้น
        | show        : คำสั่งให้แสดงหรือซ่อน มีค่าเริ่มต้น false รับได้เพียง true และ false
        | message     : ข้อความที่ต้องการให้แสดงใน Modal มีค่าเริ่มต้น 
        | functionGql : ฟังก์ชันที่ต้องให้สั่งไปหา API มีค่าเริ่มต้น
      */
      if(id !== null || id !== '')
        return setModal({ show, id, message, functionGql })
      else
        return setModal({ show, id, message, functionGql })
    }
  }
  return (
    <ModalStoreContext.Provider value={store}>
      {children}
    </ModalStoreContext.Provider>
  )
}

  /*
    | สร้าง component ModalStoreContext.Consumer
    | ModalStoreConsumer เป็น component คุมสำหรับไว้สำหรับใช้งาน state 
    |  ---- การใช้งาน 2 แบบ ----
    | <ModalStoreConsumer> { store => {} } </ModalStoreConsumer>
    | <ModalStoreContext.Consumer> { store => {} } </ModalStoreContext.Consumer>
  */
export const ModalStoreConsumer = ModalStoreContext.Consumer; 