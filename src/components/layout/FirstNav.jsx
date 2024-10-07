import React from 'react'
import { Form } from 'react-bootstrap'
import { FaLock } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

const FirstNav = () => {
    const navigate = useNavigate();
    return (
        <div className='navy_bg d-none d-md-block popins text-white'>
            <div className="container d-flex justify-content-between">
                <div className="">
                    <input style={{ backgroundColor: "#fff3" }} className='border-0 h-100 p-3 text-white placeholder_white' type="text" name="" placeholder='Search our courses...' id="" />
                </div>
                <div className="d-flex">
                    <button onClick={() => navigate("/login")} style={{ backgroundColor: "#fff3" }} className="border-0 p-3 flex items-center py-4"> <span className="mr-2"><FaLock /> </span> Course Login</button>
                </div>
            </div>
        </div>
    )
}

export default FirstNav