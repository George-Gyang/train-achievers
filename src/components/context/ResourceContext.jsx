import { createContext, useState } from "react";

export const ResourceContext = createContext();


const ResourceContextProvider = ({ children }) => {
    const [activeNav, setActiveNav] = useState("")
    return (
        <ResourceContext.Provider value={{ activeNav, setActiveNav }}>
            {children}
        </ResourceContext.Provider>
    )
}

export default ResourceContextProvider