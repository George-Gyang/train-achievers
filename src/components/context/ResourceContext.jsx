import { createContext, useEffect, useState } from "react";
import { getItemFunc } from "../utils/getApi";

export const ResourceContext = createContext();


const ResourceContextProvider = ({ children }) => {
    const [errorMesage, setErrorMessage] = useState('');
    const [activeNav, setActiveNav] = useState("")

    const [getAllSchedules, setGetAllSchedules] = useState({
        data: null,
        isDataNeeded: false,
    });

    const [getAllCourse, setGetAllCourse] = useState({
        data: null,
        isDataNeeded: false,
    });

    const [getAllUsers, setGetAllUsers] = useState({
        data: null,
        isDataNeeded: false,
    });


    useEffect(() => {
        setErrorMessage('');
        if (getAllSchedules.isDataNeeded) {
            const endPoint = "/schedules"
            const dataArray = "allShedules"
            getItemFunc(setGetAllSchedules, setErrorMessage, endPoint, dataArray)
        }
    }, [getAllSchedules.isDataNeeded]);

    useEffect(() => {
        setErrorMessage('');
        if (getAllCourse.isDataNeeded) {
            const endPoint = "/course"
            const dataArray = "allCourses"
            getItemFunc(setGetAllCourse, setErrorMessage, endPoint, dataArray)
        }
    }, [getAllCourse.isDataNeeded]);

    useEffect(() => {
        setErrorMessage('');
        if (getAllUsers.isDataNeeded) {
            const endPoint = "/users"
            const dataArray = "allUsers"
            getItemFunc(setGetAllUsers, setErrorMessage, endPoint, dataArray)
        }
    }, [getAllUsers.isDataNeeded]);

    return (
        <ResourceContext.Provider value={{
            activeNav,
            setActiveNav,
            getAllCourse,
            setGetAllCourse,
            getAllSchedules,
            setGetAllSchedules,
            getAllUsers,
            setGetAllUsers,
        }}>
            {children}
        </ResourceContext.Provider>
    )
}

export default ResourceContextProvider