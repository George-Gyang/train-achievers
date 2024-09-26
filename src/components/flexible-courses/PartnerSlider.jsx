import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const CustomDot = ({ onClick, ...rest }) => {
    const {
        onMove,
        index,
        active,
        carouselState: { currentSlide, deviceType }
    } = rest;
    // const carouselItems = [CarouselItem1, CaourselItem2, CarouselItem3];
    // onMove means if dragging or swiping in progress.
    // active is provided by this lib for checking if the item is active or not.
    return (
        <button
            id="no_border"
            className={`border-0 ${active ? "active_dot" : "inactive"}`}
            onClick={() => onClick()}
        >
            {React.Children.toArray()[index]}
        </button>
    );
};

const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
        onMove,
        carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <button onClick={() => onClick()} >Right</button>;
};
{/* <Carousel customRightArrow={<CustomRightArrow />} /> */ }

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
            <div className="d-flex justify-content-between ">
                <button className={`custom_btn position-absolute top-50 start-0 translate-middle-y p-0 z-3  inherit_bg border-0 ${currentSlide === 0 ? 'disable' : ''}`} onClick={() => previous()} > <FaChevronLeft /> </button>
                <button className="custom_btn position-absolute top-50 end-0 translate-middle-y z-3 p-0 inherit_bg border-0" onClick={() => next()} > <FaChevronRight /> </button>
            </div>
    );
};

const PartnerSlider = ({ children }) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6,
            slidesToSlide: 2 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <Carousel
            swipeable={false}
            draggable={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass={"carousel-container  py-5 w-100"}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            // deviceType={this.props.deviceType}
            dotListClass={"dots_list"}
            itemClass="px-3 hover_effect"
            showDots={false}
            //   customDot={<CustomDot />}
            // customRightArrow={<customRightArrow />}
            // customDot={<button></button>}
            // itemClass="carousel-item-padding-40-px"
            arrows={false}
            customButtonGroup={<ButtonGroup />}
        >
            {children}
        </Carousel >
    )
}

export default PartnerSlider
