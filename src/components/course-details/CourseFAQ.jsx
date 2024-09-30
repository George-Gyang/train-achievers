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

export function CourseFAQ() {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <div className="flex justify-center my-12">
            <div className="p-4 md:w-[70%]">
                <div className="">
                    <h3 className="h3 mb-5 text-center primary_color">Level 4 CTLLS FREQUENTLY ASKED QUESTIONS</h3>
                    <div className="shadow-lg rounded-lg">
                        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                            <AccordionHeader className="bg-white px-4" onClick={() => handleOpen(1)}>How quickly can I gain my CET?</AccordionHeader>
                            <AccordionBody className="px-5">
                                The course takes approximately 360 hours to complete. You can divide these hours however you wish over a 12-month period. You may choose to spread your learning across all 12 months or fit all 360 hours into a matter of weeks. You get complete flexibility, only with CTC Training.
                                How is the course assessed?
                            </AccordionBody>
                        </Accordion>
                        <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                            <AccordionHeader className="bg-white px-4" onClick={() => handleOpen(2)}>
                            How is the course assessed?
                            </AccordionHeader>
                            <AccordionBody className="px-5">
                            The course is assessed through written assignments based on the units within this course and 3 observations of you teaching. Additionally, you will be asked to provide a log of at least 30 hours of teaching you have completed.
                            </AccordionBody>
                        </Accordion>
                        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                            <AccordionHeader className="bg-white px-4" onClick={() => handleOpen(3)}>
                            Do my lessons need to be delivered in a real classroom?
                            </AccordionHeader>
                            <AccordionBody className="px-5">
                            The level 4 teaching qualification requires you to be observed delivering teaching in a real classroom – simulation is not allowed and your observations must be conducted in a real teaching environment.
                            </AccordionBody>
                        </Accordion>
                    </div>
                </div>
                <div className="my-5">
                    <p className="text-lg font-bold text-center">Still have more questions about this course?                </p>
                    <p className=" text-center">Give our team a call on <span className="font-bold primary_color">0800 031 8503</span> and we'd be happy to help!</p>
                </div>
            </div>
        </div>
    );
}