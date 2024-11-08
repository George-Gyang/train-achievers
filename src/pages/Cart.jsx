import React, { useContext, useEffect, useState } from 'react'
import { BASE_URL } from '../components/utils/base';
import { ResourceContext } from '../components/context/ResourceContext';
import { onSuccess } from '../components/general/OnSuccess';
import DeleteCartBtn from '../components/cart/DeleteCartBtn';
import axios from 'axios';
import { AuthContext } from '../components/context/AuthContext';
import { Spinner } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { getUserCart, setGetUserCart } = useContext(ResourceContext)
    const { userInfo } = useContext(AuthContext)
    const [isDeleting, setIsDeleting] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const details = userInfo?.details

    const navigate = useNavigate();

    useEffect(() => {
        setGetUserCart((prev) => {
            return {
                ...prev, isDataNeeded: true
            }
        })
    }, [])

    const deleteFunc = async (id) => {

        setGetUserCart((prev) => {
            return {
                ...prev, isDataNeeded: false
            }
        })
        setIsDeleting(true)
        const params = {
            method: 'DELETE',
            headers: {
                'Content-Type': "application/json",
                // 'Authorization': `Bearer ${userCredentials.token}`
            },
        }
        try {
            const response = await fetch(`${BASE_URL}/cart/${id}`, params);
            if (response.ok) {
                const data = await response.json();
                setGetUserCart((prev) => {
                    return {
                        ...prev, isDataNeeded: true
                    }
                })
                onSuccess({
                    message: "Message",
                    success: data.message
                })
                setIsDeleting(false)
            }
        } catch (error) {
            if (error.response) {
                onSuccess({
                    message: "Message",
                    success: error.response.message
                })
            } else {
                onSuccess({
                    message: "Message",
                    success: error.message
                })
            }
            setIsDeleting(false)
        }
    }
    let total = 0;
    for (let i = 0; i < getUserCart.data?.length; i++) {
        const price = parseFloat(getUserCart.data[i].cost)
        total += price;
    }
    // const total = getUserCart.data?.reduce((acc, product) => acc + product.cost, 0);
    let totalAmount = parseFloat(total);

    const mainDetails = {
        userId: details?.id,
        userEmail: details?.email,
        username: `${details?.firstName}`,
        amount: totalAmount,
        paymentId: 1234567890,
    }
    const handleCourseApplication = (e) => {
        setLoading(true)
        setErrorMsg(null)
        setGetUserCart((prev) => {
            return {
                ...prev, isDataNeeded: false
            }
        })
        axios.post(`${BASE_URL}/course_apply`, mainDetails, {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
                // 'Content-Type': 'multipart/form-data',
            }
        },)
            .then((response) => {
                onSuccess({
                    message: "Message",
                    success: response.data.message
                })
                setLoading(false)
                setGetUserCart((prev) => {
                    return {
                        ...prev, isDataNeeded: true
                    }
                })
                navigate("/success", { state: { mainDetails: mainDetails } })
            })
            .catch((error) => {
                if (error.response) {
                    // console.log(error.response)
                    setErrorMsg(error.response.data.message)
                    setLoading(false)
                    onSuccess({
                        message: "Message",
                        success: error.response.data.message
                    })
                } else {
                    console.log(error)
                    setLoading(false)
                    setErrorMsg(error.message)
                    onSuccess({
                        message: "Message",
                        success: error.message
                    })
                }

            });
    }
    return (
        <div>
            <div className="conatiner">
                <div className="py-5 primary_bg mb-3">
                    <h2 className="text-center text-white my-5 text-4xl font-semibold">SHOPPING CART</h2>
                </div>
                <div className="border-top">
                    <div className="container mt-5">
                        <div className="md:flex mb-5">
                            <div className="md:w-2/3">
                                <p className="font-semibold text-xl">Shopping Cart</p>
                                <p className="text-gray-600">Showing {getUserCart.data?.length} courses you added</p>
                                <div className="cart_list mt-4 border-bottom">
                                    {getUserCart.data?.map((each) => (
                                        <div key={each.id} className="flex py-3 border-top justify-between items-center">
                                            <div className='flex items-center'>
                                                <div className="">
                                                    <img src={each.image} alt="" className="h-28 rounded" />
                                                </div>
                                                <div className="font-bold ms-3">
                                                    <p>{each.courseTitle}</p>
                                                    <p>${each.cost}</p>
                                                </div>
                                            </div>
                                            <DeleteCartBtn isDeleting={isDeleting} deleteFunc={deleteFunc} cartId={each.id} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="md:w-1/3 p-4">
                                <div className='border border-black	p-3'>
                                    <h4 className='font-bold'>ORDER SUMMARY</h4>
                                    <div className="border-bottom py-3">
                                        {getUserCart.data?.map((each) => (
                                            <div key={each.id} className="flex mb-2 font-light text-sm justify-between">
                                                <p>{each.courseTitle}</p>
                                                <p>${each.cost}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex font-bold  justify-between">
                                        <p>Grand Total</p>
                                        <p>${totalAmount}</p>
                                    </div>
                                    <div className="mt-4">
                                        {errorMsg && <p className="text-center text-red-600">Error</p>}
                                        <button
                                            onClick={() => handleCourseApplication()}
                                            disabled={loading}
                                            className='bg-blue-600 w-full py-2 rounded-full text-white hover:bg-purple-600 transition-all hover:scale-105 flex justify-center items-center'>Checkout {loading && <Spinner className='size-4 ml-2' />} </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart