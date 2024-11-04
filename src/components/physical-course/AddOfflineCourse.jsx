import React, { useContext, useState } from 'react'
import { IoMdAddCircle } from 'react-icons/io'
import { ModalContainer } from '../general/ModalContainer'
import { Button, Input, Select, Spinner, Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../utils/base';
import { onSuccess } from '../general/OnSuccess';
import { AuthContext } from '../context/AuthContext';
import TextEditor from '../general/TextEditor';

const AddOfflineCourse = ({setGetAllCourse}) => {
    const { userInfo } = useContext(AuthContext)
    const [errorMsg, setErrorMsg] = useState("");
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    const [details, setDetails] = useState({
        courseTitle: "",
        summary: "",
        courseView: "",
        availability: "",
        price: "",
        file: null
    });

    const restart = () => {
        setDetails({
            courseTitle: "",
            summary: "",
            courseView: "",
            price: "",
            availability: "",
            file: null
        })
    }
    const handleOnChange = (e) => {
        const { value, name, type, files, checked } = e.target
        setDetails((prev) => {
            return {
                ...prev,
                [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
            };
        });
        setErrorMsg("");
    };

    const handleComments = (event) => {
        setDetails((prev) => {
            return {
                ...prev, courseView: event
            };
        });
        setErrorMsg("");
    };
    const handleRegistration = (e) => {
        e.preventDefault();
        setGetAllCourse((prev) => {
            return {
                ...prev, isDataNeeded: false
            }
        })
        setLoading(true)
        setErrorMsg(null)
        console.log(details)
        axios.post(`${BASE_URL}/course`, details, {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
                'Content-Type': 'multipart/form-data',
            }
        },)
            .then((response) => {
                onSuccess({
                    message: "Message",
                    success: response.data.message
                })
                restart();
                handleOpen();
                setLoading(false)
                setGetAllCourse((prev) => {
                    return {
                        ...prev, isDataNeeded: true
                    }
                })

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

    const options = [];
    for (let i = 10; i <= 50; i += 5) {
        options.push(<option key={i} value={i}>{i}</option>);
    }

    console.log(details)
    return (
        <div className='flex'>
            <button onClick={handleOpen}>
                <IoMdAddCircle className='hover_effect' size={40} />
            </button>
            <ModalContainer
                open={open}
                setOpen={setOpen}
                title="Add Course"
            >
                <form onSubmit={handleRegistration} className="mt-8 mb-2">
                    <div className="mb-1 flex flex-col gap-6">
                        <div className="grid md:grid-cols-2 gap-5">
                            <div className="">
                                <Typography variant="h6" color="blue-gray" className="mb-">
                                    Course Title
                                </Typography>
                                <Input
                                    size="lg"
                                    type="text"
                                    name="courseTitle"
                                    value={details.courseTitle}
                                    onChange={handleOnChange}
                                    placeholder="Course Title"
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                    containerProps={{ className: "min-w-[100%]" }}
                                />
                            </div>
                            <div className="">
                                <Typography variant="h6" color="blue-gray" className="mb">
                                    Summary
                                </Typography>
                                <Input
                                    size="lg"
                                    type="text"
                                    name="summary"
                                    value={details.summary}
                                    onChange={handleOnChange}
                                    placeholder="summary"
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                    containerProps={{ className: "min-w-[100%]" }}
                                />
                            </div>
                            <div className="">
                                <Typography variant="h6" color="blue-gray" className="mb">
                                   Cost Price
                                </Typography>
                                <Input
                                    size="lg"
                                    type="text"
                                    name="price"
                                    value={details.price}
                                    onChange={handleOnChange}
                                    placeholder="Cost"
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                    containerProps={{ className: "min-w-[100%]" }}
                                />
                            </div>
                            {/* <div className="">
                                <Typography variant="h6" color="blue-gray" className="mb">
                                    Country
                                </Typography>
                                <Select
                                    onChange={(val) => setCountry(val)}
                                    label="Select Country">
                                    <Option value="uk">UK</Option>
                                    <Option value="ireland">Ireland</Option>
                                </Select>
                            </div> */}
                            {/* <div className="">
                                <Typography variant="h6" color="blue-gray" className="mb">
                                    Category
                                </Typography>
                                <Select
                                    onChange={(val) => setCategory(val)}
                                    label="Select Category">
                                    <Option value="Nurse">Nurse</Option>
                                    <Option value="Carer">Carer</Option>
                                    <Option value="Social">Social Care Worker</Option>
                                </Select>
                            </div> */}
                            {/* <div className="">
                                <Typography variant="h6" color="blue-gray" className="mb">
                                    Phone
                                </Typography>
                                <CountryInput details={details} handleOnChange={handleOnChange} />
                            </div> */}
                            {/* <div className="">
                                <Typography variant="h6" color="blue-gray" className="mb">
                                    Details
                                </Typography>
                                <Input
                                    size="lg"
                                    type="text"
                                    name="courseView"
                                    value={details.courseView}
                                    onChange={handleOnChange}
                                    placeholder="name@mail.com"
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                    containerProps={{ className: "min-w-[100%]" }}
                                />
                            </div> */}
                            <div className="">
                                <Typography variant="h6" color="blue-gray" className="mb-">
                                    Image
                                </Typography>
                                <Input
                                    size="lg"
                                    name="file"
                                    // value={details.password}
                                    onChange={handleOnChange}
                                    type={"file"}
                                    placeholder="file"
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                    containerProps={{ className: "min-w-[100%]" }}
                                />
                            </div>

                            <div class="w-full max-w-sm min-w-[200px]">
                                <label class="block font-bold text-black mb-1 text-sm text-slate-800">
                                    Max Population
                                </label>

                                <div class="relative">
                                    <select
                                        size={"lg"}
                                        name='availability'
                                        onChange={handleOnChange}
                                        class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2.5 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer">
                                        <option value="">-- select --</option>
                                        {/* <option value="Online">Online</option>
                                        <option value="Offline">Offline</option> */}
                                        {options}
                                    </select>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" class="h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-slate-700">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <TextEditor
                            textValue={details.courseView}
                            handleText={handleComments}
                            label="Course View"
                        />
                    </div>
                    {
                        errorMsg && (
                            <p className="text-red-600 text-center mt-3">{errorMsg}</p>
                        )
                    }
                    <Button disabled={loading} type="submit" className="mt-4 flex justify-center items-center custom_btn primary_bg" fullWidth>
                        sign up
                        {loading && <Spinner className="size-5 ml-2" color="purple" />}
                    </Button>
                    <Typography color="gray" className="mt-4 text-center font-normal">
                        Already have an account?{" "}
                        <Link to="/login" className="font-medium text-gray-900">
                            Login
                        </Link>
                    </Typography>
                </form>
            </ModalContainer>
        </div>
    )
}

export default AddOfflineCourse