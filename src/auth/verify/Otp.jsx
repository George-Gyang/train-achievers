import axios from 'axios';
import React, { useState } from 'react'
import OtpInput from "react-otp-input";
import { BASE_URL } from '../../components/utils/base';
import { useNavigate } from 'react-router-dom';
import { Button, Spinner } from '@material-tailwind/react';
import { onSuccess } from '../../components/general/OnSuccess';

const Otp = () => {
    const currentEmail = localStorage.getItem("achieversEmail");

    const navigate = useNavigate();
    const [otp, setOtp] = useState('');
    const [showMsg, setShowMsg] = useState(false)
    const [loading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")

    const handleOtpSubmit = async (event) => {
        event.preventDefault();
        const otpDetails = {
            otp: otp,
            email: currentEmail
        }
        setErrorMsg("")
        setLoading(true)
        axios.post(`${BASE_URL}/verify-otp`, otpDetails,)
            .then((response) => {
                localStorage.removeItem("achieversEmail")
                navigate("/login");
                onSuccess({
                    message: "Message",
                    success: response.data.message
                })
                setLoading(false)
            })
            .catch((error) => {
                console.log(error);
                if (error.response) {
                    onSuccess({
                        message: "Message",
                        success: response.data.message
                    })
                    setErrorMsg(error.data.response)
                    setLoading(false);
                } else {
                    onSuccess({
                        message: "Message",
                        success: error.message
                    })
                    setErrorMsg(error.message)
                    setLoading(false);
                }
            });
    }

    const handleOtpResend = async (event) => {
        const otpDetails = {
            email: currentEmail
        }
        setErrorMsg("")
        setLoading(true)
        axios.put(`${BASE_URL}/user`, otpDetails,)
            .then((response) => {
                onSuccess({
                    message: "Message",
                    success: response.data.message
                })
                setLoading(false)
            })
            .catch((error) => {
                console.log(error);
                if (error.response) {
                    onSuccess({
                        message: "Message",
                        success: response.data.message
                    })
                    setErrorMsg(error.data.response)
                    setLoading(false);
                } else {
                    onSuccess({
                        message: "Message",
                        success: error.message
                    })
                    setErrorMsg(error.message)
                    setLoading(false);
                }
            });
    }

    return (
        <div>
            <div className="flex flex-col items-center space-y-4">
                <p className="text-sm text-slate-600">Enter the 4-digit OTP sent to <span className="font-bold">{currentEmail}</span></p>
                <form onSubmit={handleOtpSubmit}>
                    <OtpInput
                        inputStyle="h-10 w_20em bg-transparent text-center placeholder:text-slate-400 text-slate-700 text-lg border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        containerStyle={"flex items-center space-x-2"}
                        value={otp}
                        onChange={setOtp}
                        numInputs={4}
                        // renderSeparator={<span>-</span>}
                        renderInput={(props) => <input {...props} />}
                    />
                    {errorMsg && <p className='text-red-600 text-sm text-center mt-3'>{errorMsg}</p>}
                    <div className="flex items-center mt-4">
                        <Button type='submit' color='indigo' size='sm' className='mx-auto flex items-center'>Verify
                            {loading && <Spinner className='size-4 ml-2' />}
                        </Button>
                    </div>
                </form>
                <p className="text-xs text-slate-400 mt-4">
                    Did not receive the code? <button
                    onClick={()=> handleOtpResend()}
                     className="font-bold border px-2 py-1 cursor-pointer">Resend</button>
                </p>
            </div>
        </div>
    )
}

export default Otp