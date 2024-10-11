import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    Spinner,
} from "@material-tailwind/react";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { onSuccess } from "../general/OnSuccess";
import { BASE_URL } from "../utils/base";
import axios from "axios";

export default function LoginComponent() {
    const [open, setIsOpen] = useState(false);
    const handleOpen = () => setIsOpen(!open);

    const { userInfo, setUserInfo } = useContext(AuthContext);
    const navigate = useNavigate();

    const [errorMsg, setErrorMsg] = useState("");
    const [loading, setLoading] = useState(false);

    const [details, setDetails] = useState({
        email: "",
        password: "",
    });


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

    const handleLogin = (e) => {
        e.preventDefault();
        setErrorMsg(null)
        setLoading(true)
        axios.post(`${BASE_URL}/login`, details, {
            headers: { "Content-Type": "application/json" },
            credentials: "include",
        },)
            .then((response) => {
                // console.log(response.data)
                onSuccess({
                    message: "Message",
                    success: response.data.message
                })
                setUserInfo(response.data)
                localStorage.setItem("userDetails", JSON.stringify(response.data));
                setLoading(false)
                navigate("/dashboard");
            })
            .catch((error) => {
                console.log(error)
                if (error.response) {
                    setErrorMsg(error.response.data.message)
                    setLoading(false);
                    onSuccess({
                        message: "Message",
                        success: error.response.data.message
                    })
                } else {
                    setErrorMsg(error.message)
                    setLoading(false);
                    onSuccess({
                        message: "Message",
                        success: error.message
                    })
                }

            });
    }
    // console.log(details)
    return (
        <Card color="transparent" shadow={false}>
            <div className="mb-5">
                <Link to={"/"} className='nav-link fs-4 text-center'>
                    <h5 ><span className="primary_color">TRAIN</span><span className="secondary_color">ACHIEVERS</span></h5>
                </Link>
            </div>
            <Typography className="text-center" variant="h4" color="blue-gray">
                Login
            </Typography>
            {/* <Typography color="gray" className="mt-1 font-normal">
                Nice to meet you! Enter your details to register.
            </Typography> */}

            <form onSubmit={handleLogin} className="mt-8 mb-2">
                <div className="mb-1 flex flex-col gap-6">
                    {/* <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Your Name
                    </Typography>
                    <Input
                        size="lg"
                        placeholder="name@mail.com"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    /> */}
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Your Email
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
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Password
                    </Typography>
                    <div className="relative">
                        <Input
                            type={open ? "text" : "password"}
                            size="lg"
                            name="password"
                            value={details.password}
                            onChange={handleOnChange}
                            placeholder="********"
                            className="pe-5 !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        <span onClick={handleOpen} className="absolute top-50 end-0 pr-3 translate-middle-y cursor-pointer end-0">
                            {open ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                </div>
                {
                    errorMsg && (
                        <p className="text-red-600 text-center mt-3">{errorMsg}</p>
                    )
                }
                <Button disabled={loading} type="submit" className="mt-4 flex justify-center items-center custom_btn primary_bg" fullWidth>
                    Login
                    {loading && <Spinner className="size-5 ml-2" color="purple" />}
                </Button>
                <Typography color="gray" className="mt-4 text-center font-normal">
                    Don't have an account?{" "}
                    <Link to="/registration" className="font-medium text-gray-900">
                        Sign Up
                    </Link>
                </Typography>
            </form>
        </Card>
    );
}