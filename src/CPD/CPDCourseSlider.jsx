import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CPDOnlineCourse from "./CPDOnlineCourse";

const CPDCourseSlider = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className="">
            <Carousel 
            containerClass="mb-"
            itemClass="pe-3"
            responsive={responsive}>
                <CPDOnlineCourse />
                <CPDOnlineCourse />
                <CPDOnlineCourse />
                <CPDOnlineCourse />
                <CPDOnlineCourse />
                <CPDOnlineCourse />
            </Carousel>
        </div>
    )
}

export default CPDCourseSlider