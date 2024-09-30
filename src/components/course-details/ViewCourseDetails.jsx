import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { IoChevronDownCircleOutline, IoChevronUpCircleOutline } from "react-icons/io5";

function Icon({ id, open }) {
    return (
        <>
            {id === open ? <IoChevronDownCircleOutline size={30} /> : <IoChevronUpCircleOutline size={30} />}
        </>
    );
}

export function ViewCourseDetails() {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <div className="p-4">
            <div className="">
                <div className="shadow-md rounded-lg">
                    <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                        <AccordionHeader className="bg-white px-4" onClick={() => handleOpen(1)}>What is Material Tailwind?</AccordionHeader>
                        <AccordionBody>
                            We&apos;re not always in the position that we want to be at. We&apos;re constantly
                            growing. We&apos;re constantly makin className="px-4"g mistakes. We&apos;re constantly trying to express
                            ourselves and actualize our dreams.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                        <AccordionHeader className="bg-white px-4" onClick={() => handleOpen(2)}>
                            How to use Material Tailwind?
                        </AccordionHeader>
                        <AccordionBody className="px-4">
                            We&apos;re not always in the position that we want to be at. We&apos;re constantly
                            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                            ourselves and actualize our dreams.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                        <AccordionHeader className="bg-white px-4" onClick={() => handleOpen(3)}>
                            What can I do with Material Tailwind?
                        </AccordionHeader>
                        <AccordionBody className="px-4">
                            We&apos;re not always in the position that we want to be at. We&apos;re constantly
                            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                            ourselves and actualize our dreams.
                        </AccordionBody>
                    </Accordion>
                </div>
            </div>
        </div>
    );
}