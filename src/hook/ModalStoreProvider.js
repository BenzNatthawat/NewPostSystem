import React from 'react'

export const ModalStoreContext = React.createContext();
export const ModalStoreProvider = ({ children }) => {
  const [Modal, setModal] = React.useState(
    {
      show: false,
      cardid: ''
    }
  )
  const store = {
    Modal,
    submitModal: (show, cardid) => {
      return setModal({ show, cardid })
    }
  }
  return (
    <ModalStoreContext.Provider value={store}>
      {children}
    </ModalStoreContext.Provider>
  )
}

export const ModalStoreConsumer = ModalStoreContext.Consumer;