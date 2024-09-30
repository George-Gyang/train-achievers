import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { IoChevronDownCircleOutline, IoChevronDownOutline, IoChevronUpCircleOutline, IoChevronUpOutline } from "react-icons/io5";

function Icon({ id, open }) {
    return (
        <>
            {id === open ? <IoChevronDownOutline size={20} /> : <IoChevronUpOutline size={20} />}
        </>
    );
}

function DetailsOption() {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <div className="p-4">
            <div className="shadow-md">
                <div className="shadow-md">
                    <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                        <AccordionHeader className="text-sm px-4" onClick={() => handleOpen(1)}>Looking to purchase multiple</AccordionHeader>
                        <AccordionBody>
                            <div className={`my-4 togglable_element`}>
                                <p className='mb-4'>After you have completed your purchase you will be emailed a link to a page where you can manage who is enrolled on the courses.</p>
                                <div className="text-center">
                                    <input type="number" min={1} className='text-3xl inline-block pr-1 rounded w-[50px]' />
                                </div>
                            </div>
                        </AccordionBody>
                    </Accordion>
                </div>
            </div>
        </div>
    );
}

export default DetailsOption;