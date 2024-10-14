import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CPDOnlineCourse from "./CPDOnlineCourse";
import CPDCategory from "./CPDCategory";
import image1 from "../assets/jpg/category_img1.jpg"
import image2 from "../assets/jpg/category_img2.jpg"
import image3 from "../assets/jpg/category_img3.jpg"

const CPDCategorySlider = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
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
    const categories = [
        {
            id: 1,
            title: "Nurses",
            sum: "Begin your nursing career with flexible courses on CPD",
            url: image1,
        },
        {
            id: 2,
            title: "Carer",
            sum: "Gain crucial skill essential for a successful career in social...",
            url: image2,
        },
        {
            id: 3,
            title: "Social Care Worker",
            sum: "Advance Caregiving skills from with inline courses from top ...",
            url: image3,
        },
    ]
    return (
        <div className="">
            <Carousel
                containerClass="mb-"
                itemClass="pe-3"
                responsive={responsive}>
                {categories.map((cate) => (
                    <CPDCategory key={cate.id} category={cate} />
                ))}
            </Carousel>
        </div>
    )
}

export default CPDCategorySlider