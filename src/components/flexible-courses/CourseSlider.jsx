import React from "react";
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

// const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
//   const { carouselState: { currentSlide } } = rest;
//   return (
//     <div className="carousel-button-grou position-absolute vw-100"> 
//       <button className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} >one</button>
//       <button onClick={() => next()} >two</button>
//     </div>
//   );
// };

const CourseSlider = ({ children }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 2 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={false}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass={"carousel-container p-5"}
      removeArrowOnDeviceType={["tablet", ]}
      // deviceType={this.props.deviceType}
      dotListClass={"dots_list"}
      itemClass="px-3 hover_effect"
      customDot={<CustomDot />}
      // customRightArrow={<customRightArrow />}
      // customDot={<button></button>}
      // itemClass="carousel-item-padding-40-px"
      // arrows={false}
    // customButtonGroup={<ButtonGroup />}
    >
      {children}
    </Carousel >
  )
}

export default CourseSlider
