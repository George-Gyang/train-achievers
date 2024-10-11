import React, { useContext } from 'react'
import { Form } from 'react-bootstrap'
import { FaLock } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { BASE_URL } from '../utils/base';
import { onSuccess } from '../general/OnSuccess';

const FirstNav = () => {

    const { userInfo, setUserInfo } = useContext(AuthContext)

    const navigate = useNavigate();
    console.log(userInfo)
    function logout() {
        console.log("hello")
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
        <div className='navy_bg d-none d-md-block popins text-white'>
            <div className="container d-flex justify-content-between">
                <div className="">
                    <input style={{ backgroundColor: "#fff3" }} className='border-0 h-100 p-3 text-white placeholder_white' type="text" name="" placeholder='Search our courses...' id="" />
                </div>
                <div className="d-flex">
                    {userInfo ? (
                        <button onClick={() => logout()} style={{ backgroundColor: "#fff3" }} className="border-0 p-3 flex items-center py-4"> <span className="mr-2"><FaLock /> </span> Logout</button>
                    ) : (
                        <button onClick={() => navigate("/login")} style={{ backgroundColor: "#fff3" }} className="border-0 p-3 flex items-center py-4"> <span className="mr-2"><FaLock /> </span> Course Login</button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default FirstNav