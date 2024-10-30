import React, { useContext, useState } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Spinner,
} from "@material-tailwind/react";
import { BASE_URL } from "../utils/base";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { onSuccess } from "../general/OnSuccess";

export default function AssignAdmin({ setGetAllUsers, id }) {
    const { userInfo } = useContext(AuthContext)
    const [errorMsg, setErrorMsg] = useState("");
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(!open);
    const [details, setDetails] = useState({
        id: id,
        role: "admin"
    })


    const handleAssignment = (e) => {
        e.preventDefault();
        setGetAllUsers((prev) => {
            return {
                ...prev, isDataNeeded: false
            }
        })
        setLoading(true)
        setErrorMsg(null)
        console.log(details)
        axios.put(`${BASE_URL}/user`, details, {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            }
        },)
            .then((response) => {
                handleOpen();
                setLoading(false)
                setGetAllUsers((prev) => {
                    return {
                        ...prev, isDataNeeded: true
                    }
                })
                onSuccess({
                    message: "Message",
                    success: response.data.message
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
    return (
        <>
            <Button onClick={handleOpen} variant="gradient">
                Make Admin
            </Button>
            <Dialog size="xs" className="hello_world" open={open} handler={handleOpen}>
                <DialogHeader>Assign Admin</DialogHeader>
                <DialogBody>
                    Are you sure you want to make Admin??
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={handleOpen}
                        className="mr-1"
                    >
                        <span>Cancel</span>
                    </Button>
                    <Button onClick={handleAssignment} className="flex items-center" variant="gradient" color="green">
                        <span className="mr-2">Confirm</span>
                        {loading && <Spinner className="h-4 w-4" />}
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}