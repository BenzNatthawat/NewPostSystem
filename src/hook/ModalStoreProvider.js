import React from 'react'

const ModalStoreContext = React.createContext(); //
export const ModalStoreProvider = ({ children }) => {
  const [Modal, setModal] = React.useState(
    {
      id: '',
      show: false,
      message: 'ท่านต้องการที่จะลบ ใช่หรือไม่'
    }
  )
  const store = {
    Modal,
    submitModal: ( id='', show=false, message='ท่านต้องการที่จะลบ ใช่หรือไม่' ) => {
      if(id !== null || id !== '')
        return setModal({ show, id, message })
      else
        return setModal({ show, id, message })
    }
  }
  return (
    <ModalStoreContext.Provider value={store}>
      {children}
    </ModalStoreContext.Provider>
  )
}

export const ModalStoreConsumer = ModalStoreContext.Consumer;