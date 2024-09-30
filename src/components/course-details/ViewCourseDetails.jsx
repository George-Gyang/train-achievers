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
            {id === open ? <IoChevronUpCircleOutline size={30} /> : <IoChevronDownCircleOutline size={30} />}
        </>
    );
}

export default function ViewCourseDetails() {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <div className="p-4">
            <div className="">
                <div className="shadow-md rounded-lg">
                    <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                        <AccordionHeader className="bg-white px-4" onClick={() => handleOpen(1)}>Study Hours</AccordionHeader>
                        <AccordionBody className="px-5">
                            Approximate study period for this qualification is 360 hours. These can be divided however you’d like over a 12-month period.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                        <AccordionHeader className="bg-white px-4" onClick={() => handleOpen(2)}>
                            Assessment
                        </AccordionHeader>
                        <AccordionBody className="px-5">
                            This award is assessed in a number of ways to ensure learner compliance with the syllabus and assessment outcomes.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                        <AccordionHeader className="bg-white px-4" onClick={() => handleOpen(3)}>
                            Course Duration
                        </AccordionHeader>
                        <AccordionBody className="px-5">
                            Your hours can be divided over a 12-month period. The course can be completed in a matter of months or over the course of a year. Most learners will complete this course in 5-9 months.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
                        <AccordionHeader className="bg-white px-4" onClick={() => handleOpen(4)}>
                            Course Type
                        </AccordionHeader>
                        <AccordionBody className="px-5">
                            This is an online course. You will have access to our online portfolio with interactive content, online assessment materials and unlimited tutor support via email or telephone.                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
                        <AccordionHeader className="bg-white px-4" onClick={() => handleOpen(5)}>
                            All-inclusive Price
                        </AccordionHeader>
                        <AccordionBody className="px-5">
                            Our qualification pricing is simple – there are no hidden extras or charges. The fee includes your portal, tutor support, assessment / re-assessment and certification.                        </AccordionBody>
                    </Accordion>
                </div>
            </div>
        </div>
    );
}