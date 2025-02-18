import {  createContext, useContext, useState } from "react";

const modalContext = createContext();


export const ModalProvider = ({children}) => {
    const [showModal,setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    return <modalContext.Provider value={{showModal,openModal,closeModal}} >
        {children}
    </modalContext.Provider>

}

export const  useModal = ()=> useContext(modalContext);