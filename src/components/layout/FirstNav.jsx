import React from 'react'
import { Form } from 'react-bootstrap'
import { FaLock } from 'react-icons/fa'

const FirstNav = () => {
    return (
        <div className='navy_bg popins text-white'>
            <div className="container d-flex justify-content-between">
                <div className="">
                    <input style={{ backgroundColor: "#fff3" }} className='border-0 p-3 text-white placeholder_white' type="text" name="" placeholder='Search our courses...' id="" />
                </div>
                <div className="d-flex">
                    <button style={{ backgroundColor: "#fff3" }} className="border-0 p-3"> <span className=""><FaLock /> </span> Course Login</button>
                </div>
            </div>
        </div>
    )
}

export default FirstNav