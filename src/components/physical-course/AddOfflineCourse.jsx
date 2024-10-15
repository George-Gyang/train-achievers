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

const AddOfflineCourse = () => {
    const { userInfo } = useContext(AuthContext)
    const [errorMsg, setErrorMsg] = useState("");
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    const [details, setDetails] = useState({
        courseTitle: "",
        summary: "",
        courseView: "",
        file: null
    });

    const restart = () => {
        setDetails({
            courseTitle: "",
            summary: "",
            courseView: "",
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
        // setGetAllAdmin((prev) => {
        //     return {
        //         ...prev, isDataNeeded: false
        //     }
        // })
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
                // setGetAllAdmin((prev) => {
                //     return {
                //         ...prev, isDataNeeded: true
                //     }
                // })

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
    console.log(details)
    return (
        <div>
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
                        </div>
                        
                        <TextEditor
                                textValue={details.courseView}
                                handleText={handleComments} 
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