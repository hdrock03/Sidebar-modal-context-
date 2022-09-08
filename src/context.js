import React, {useState, useContext} from 'react'

// context banate hai qki app.js me jyada function nh likhna pade
// yaha pe export krne ke baad index.js me import krenge
// now wrap your App component inside AppProvider inside index.js
const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openSidebar = () => {
        setIsSidebarOpen(true)
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    return <AppContext.Provider value={{
        isModalOpen,
        isSidebarOpen,
        openModal,
        openSidebar,
        closeModal,
        closeSidebar
    }}>{children}</AppContext.Provider>
}

//custom hook
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}