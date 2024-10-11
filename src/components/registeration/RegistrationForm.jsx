import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    Select,
    Option,
    Spinner,
} from "@material-tailwind/react";
import { CountryInput } from "./CountryInput";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { BASE_URL } from "../utils/base";
import axios from "axios";
import { onSuccess } from "../general/OnSuccess";

export default function RegistrationForm() {
    const [errorMsg, setErrorMsg] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const [details, setDetails] = useState({
        firstName: "",
        lastName: "",
        email: "",
        country: "",
        category: "",
        phone: "",
        password: "",
        confirmPassword: "",
    });

    const restart = () => {
        setDetails({
            firstName: "",
            lastName: "",
            email: "",
            country: "",
            category: "",
            phone: "",
            password: "",
            confirmPassword: "",
        })
    }
    const handleOnChange = (e) => {
        const { value, name, type, checked } = e.target
        setDetails((prev) => {
            return {
                ...prev,
                [name]: type === "checkbox" ? checked : value
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
        axios.post(`${BASE_URL}/register`, details, {
            headers: { "Content-Type": "application/json" }
        },)
            .then((response) => {
                console.log(response.data)
                onSuccess({
                    message: "Message",
                    success: response.data.message
                })
                restart();
                navigate("/login")
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

    const setCountry = (value) => (
        setDetails((prev) => ({ ...prev, country: value }
        ))
    )
    const setCategory = (value) => (
        setDetails((prev) => ({ ...prev, category: value }
        ))
    )
    const setPhone = (value) => (
        setDetails((prev) => ({ ...prev, phone: value }
        ))
    )
    // console.log(details)

    return (
        <Card color="transparent" shadow={false}>
            <div className="mb-5">
                <Link to={"/"} className='nav-link fs-4 text-center'>
                    <h5 ><span className="primary_color">TRAIN</span><span className="secondary_color">ACHIEVERS</span></h5>
                </Link>
            </div>
            <Typography className="text-center" variant="h4" color="blue-gray">
                Create Your Account
            </Typography>
            <form onSubmit={handleRegistration} className="mt-8 mb-2">
                <div className="mb-1 flex flex-col gap-6">
                    <div className="grid md:grid-cols-2 gap-5">
                        <div className="">
                            <Typography variant="h6" color="blue-gray" className="mb-">
                                First Name
                            </Typography>
                            <Input
                                size="lg"
                                type="text"
                                name="firstName"
                                value={details.firstName}
                                onChange={handleOnChange}
                                placeholder="first name"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                containerProps={{ className: "min-w-[100%]" }}
                            />
                        </div>
                        <div className="">
                            <Typography variant="h6" color="blue-gray" className="mb">
                                Last Name
                            </Typography>
                            <Input
                                size="lg"
                                type="text"
                                name="lastName"
                                value={details.lastName}
                                onChange={handleOnChange}
                                placeholder="last name"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                containerProps={{ className: "min-w-[100%]" }}
                            />
                        </div>
                        <div className="">
                            <Typography variant="h6" color="blue-gray" className="mb">
                                Country
                            </Typography>
                            <Select
                                onChange={(val) => setCountry(val)}
                                label="Select Country">
                                <Option value="uk">UK</Option>
                                <Option value="ireland">Ireland</Option>
                            </Select>
                        </div>
                        <div className="">
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
                        </div>
                        <div className="">
                            <Typography variant="h6" color="blue-gray" className="mb">
                                Phone
                            </Typography>
                            <CountryInput details={details} handleOnChange={handleOnChange} />
                        </div>
                        <div className="">
                            <Typography variant="h6" color="blue-gray" className="mb">
                                Email
                            </Typography>
                            <Input
                                size="lg"
                                type="email"
                                name="email"
                                value={details.email}
                                onChange={handleOnChange}
                                placeholder="name@mail.com"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                containerProps={{ className: "min-w-[100%]" }}
                            />
                        </div>
                        <div className="">
                            <Typography variant="h6" color="blue-gray" className="mb-">
                                Password
                            </Typography>
                            <Input
                                size="lg"
                                name="password"
                                value={details.password}
                                onChange={handleOnChange}
                                type={"password"}
                                placeholder="*********"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                containerProps={{ className: "min-w-[100%]" }}
                            />
                        </div>
                        <div className="">
                            <Typography variant="h6" color="blue-gray" className="mb">
                                Confirm Password
                            </Typography>
                            <Input
                                size="lg"
                                type="password"
                                name="confirmPassword"
                                value={details.confirmPassword}
                                onChange={handleOnChange}
                                placeholder="********"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                containerProps={{ className: "min-w-[100%]" }}
                            />
                        </div>
                    </div>
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
        </Card>
    );
}