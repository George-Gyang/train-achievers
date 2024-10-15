import { createContext, useEffect, useState } from "react";
import { getItemFunc } from "../utils/getApi";

export const ResourceContext = createContext();


const ResourceContextProvider = ({ children }) => {
    const [errorMesage, setErrorMessage] = useState('');
    const [activeNav, setActiveNav] = useState("")
    const [getAllAdmin, setGetAllAdmin] = useState({
        data: null,
        isDataNeeded: false,
    });

    const [getAllCourse, setGetAllCourse] = useState({
        data: null,
        isDataNeeded: false,
    });


    useEffect(() => {
        setErrorMessage('');
        if (getAllAdmin.isDataNeeded) {
            const endPoint = "/users"
            const dataArray = "allUsers"
            getItemFunc(setGetAllAdmin, setErrorMessage, endPoint, dataArray)
        }
    }, [getAllAdmin.isDataNeeded]);

    useEffect(() => {
        setErrorMessage('');
        if (getAllCourse.isDataNeeded) {
            const endPoint = "/course"
            const dataArray = "allCourses"
            getItemFunc(setGetAllCourse, setErrorMessage, endPoint, dataArray)
        }
    }, [getAllCourse.isDataNeeded]);
    return (
        <ResourceContext.Provider value={{
            activeNav,
            setActiveNav,
            getAllCourse,
            setGetAllCourse
        }}>
            {children}
        </ResourceContext.Provider>
    )
}

export default ResourceContextProvider