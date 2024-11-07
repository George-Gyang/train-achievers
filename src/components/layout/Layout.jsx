import React, { useContext, useEffect } from 'react'
import NavbarComponent from './NavbarComponent'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import FirstNav from './FirstNav'
import { AuthContext } from '../context/AuthContext'
import { BASE_URL } from '../utils/base'
import { onSuccess } from '../general/OnSuccess'
import { ResourceContext } from '../context/ResourceContext'

const Layouts = () => {
    const { userInfo, setUserInfo } = useContext(AuthContext)
    const { getUserCart, setGetUserCart } = useContext(ResourceContext)

    const navigate = useNavigate();

    useEffect(() => {
        setGetUserCart((prev) => {
            return {
                ...prev, isDataNeeded: true
            }
        })
    }, [])

    function logout() {
        fetch(`${BASE_URL}/logout`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            }
        }).then((response) => {
            response.json().then((res) => {
                localStorage.removeItem("userDetails")
                setUserInfo(null);
                navigate("/")
                console.log(res)
                onSuccess({
                    message: "Message",
                    success: res
                })
            });
        }).catch(error => console.log(error));
    }

    return (
        <>
            <FirstNav logout={logout} userInfo={userInfo} getCart={getUserCart.data} />
            <NavbarComponent logout={logout} userInfo={userInfo} getCart={getUserCart.data} />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layouts