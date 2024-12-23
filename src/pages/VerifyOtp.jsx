import React from 'react'
import Otp from '../auth/verify/Otp'

const VerifyOtp = () => {
    return (
        <div className='login_bg min-h-lvh'>
            <div className="bg-black/50 min-h-lvh py-16">
                <div className="container h-100 flex justify-center">
                    <div className='bg-white p-4 md:w-2/5 rounded shadow-lg'>
                        <Otp />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VerifyOtp