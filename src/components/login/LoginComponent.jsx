import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function LoginComponent() {
    const [open, setIsOpen] = useState(false)
    const handleOpen = () => setIsOpen(!open)
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
            <form className="mt-8 mb-2">
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
                <Button className="mt-5 custom_btn primary_bg" fullWidth>
                    sign up
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