import { createContext, useContext, useEffect, useState } from "react";
import { getItemFunc } from "../utils/getApi";
import { AuthContext } from "./AuthContext";

export const ResourceContext = createContext();


const ResourceContextProvider = ({ children }) => {
    const { userInfo } = useContext(AuthContext)
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

    const [getUserCart, setGetUserCart] = useState({
        data: null,
        isDataNeeded: false,
    });
    const [getEnrollment, setGetEnrollment] = useState({
        data: null,
        isDataNeeded: false,
    });
    const [getUserCourses, setGetUserCourses] = useState({
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

    // cart by User ID
    useEffect(() => {
        setErrorMessage('');
        if (userInfo) {
            if (getUserCart.isDataNeeded) {
                const endPoint = `/user_cart/${userInfo.details.id}`
                const dataArray = "userCart"
                getItemFunc(setGetUserCart, setErrorMessage, endPoint, dataArray)
            }
        }
    }, [getUserCart.isDataNeeded]);

    useEffect(() => {
        setErrorMessage('');
        if (getEnrollment.isDataNeeded) {
            const endPoint = "/enrollment"
            const dataArray = "allList"
            getItemFunc(setGetEnrollment, setErrorMessage, endPoint, dataArray)
        }
    }, [getEnrollment.isDataNeeded]);

    useEffect(() => {
        setErrorMessage('');
        if (userInfo) {
            if (getUserCourses.isDataNeeded) {
                const endPoint = `/enrollByUser/${userInfo.details.id}`
                const dataArray = "userCourses"
                getItemFunc(setGetUserCourses, setErrorMessage, endPoint, dataArray)
            }
        }
    }, [getUserCourses.isDataNeeded]);

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
            getUserCart,
            setGetUserCart,
            getEnrollment,
            setGetEnrollment,
            getUserCourses,
            setGetUserCourses,
        }}>
            {children}
        </ResourceContext.Provider>
    )
}

export default ResourceContextProvider