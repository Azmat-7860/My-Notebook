import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [isUpdate, setIsUpdate] = useState(false);

  const openModal = (note = null, update = false) => {
    setModalData(note);
    setIsUpdate(update);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalData(null);
    setIsUpdate(false);
  };

  return (
    <ModalContext.Provider value={{ showModal, modalData, isUpdate, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
