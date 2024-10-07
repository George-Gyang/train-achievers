import React from 'react'
import LoginComponent from '../components/login/LoginComponent'

const Login = () => {
    return (
        <div className='login_bg min-h-lvh'>
            <div className="bg-black/50 min-h-lvh py-16">
                <div className="container h-100 flex justify-center">
                    <div className='bg-white p-4 md:w-2/5 rounded shadow-lg'>
                        <LoginComponent />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login