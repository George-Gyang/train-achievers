import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    Select,
    Option,
} from "@material-tailwind/react";
import { CountryInput } from "./CountryInput";
import { Link } from "react-router-dom";

export default function RegistrationForm() {
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
            <form className="mt-8 mb-2">
                <div className="mb-1 flex flex-col gap-6">
                    <div className="grid md:grid-cols-2 gap-5">
                        <div className="">
                            <Typography variant="h6" color="blue-gray" className="mb-">
                                First Name
                            </Typography>
                            <Input
                                size="lg"
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
                            <Select label="Select Country">
                                <Option>UK</Option>
                                <Option>Ireland</Option>
                            </Select>
                        </div>
                        <div className="">
                            <Typography variant="h6" color="blue-gray" className="mb">
                                Category
                            </Typography>
                            <Select label="Select Category">
                                <Option>Nurse</Option>
                                <Option>Carer</Option>
                                <Option>Social Care Worker</Option>
                            </Select>
                        </div>
                        <div className="">
                            <Typography variant="h6" color="blue-gray" className="mb">
                                Phone
                            </Typography>
                            <CountryInput />
                        </div>
                        <div className="">
                            <Typography variant="h6" color="blue-gray" className="mb">
                                Email
                            </Typography>
                            <Input
                                size="lg"
                                type={"password"}
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
                <Button className="mt-5 custom_btn primary_bg" fullWidth>
                    sign up
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