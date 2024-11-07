import React, { useContext } from 'react'
import { Form } from 'react-bootstrap'
import { FaLock } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { BASE_URL } from '../utils/base';
import { onSuccess } from '../general/OnSuccess';

const FirstNav = ({ logout, userInfo, getCart }) => {

    const navigate = useNavigate();
    return (
        <div className='navy_bg d-none d-md-block popins text-white'>
            <div className="container d-flex justify-content-between">
                <div className="">
                    <input style={{ backgroundColor: "#fff3" }} className='border-0 h-100 p-3 text-white placeholder_white' type="text" name="" placeholder='Search our courses...' id="" />
                </div>
                {
                    getCart?.length > 0 && (
                        <div className="mt-3">
                            <div className="relative inline-flex">
                                <button
                                    onClick={() => navigate("/carts", { state: { getCart: getCart } })}
                                    className="flex items-center rounded-md bg-slate-800 py-2 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                        <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                </button>
                                <span
                                    className="absolute top-0.5 left-0.5 grid min-h-[24px] min-w-[24px] -translate-x-2/4 -translate-y-2/4 place-items-center rounded-full bg-purple-500 py-1 px-1 text-xs font-medium leading-none text-white content-['']"
                                >{getCart?.length}</span>
                            </div>
                        </div>
                    )
                }
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