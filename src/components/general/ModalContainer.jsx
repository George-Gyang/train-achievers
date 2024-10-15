import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import { IoMdAddCircle } from "react-icons/io";

export function ModalContainer({ children, open, title, setOpen}) {
    // const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);

    return (
        <>
            {/* <Button onClick={handleOpen} variant="gradient">
                <IoMdAddCircle className='hover_effect' size={40} />
            </Button> */}
            <Dialog overlay={false}  open={open} handler={handleOpen}>
                <DialogHeader>{title}</DialogHeader>
                <DialogBody className="overflow-scroll h-[400px] ">
                    {children}
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
                    <Button variant="gradient" color="green" onClick={handleOpen}>
                        <span>Confirm</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}