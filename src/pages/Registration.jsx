import React from 'react'
import RegistrationForm from '../components/registeration/RegistrationForm'

const Registration = () => {
    return (
        <div className='login_bg min-h-lvh'>
            <div className="bg-black/50  min-h-lvh py-5">
                <div className="container h100 flex justify-center">
                    <div className='bg-white p-4 rounded shadow-lg'>
                        <RegistrationForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registration