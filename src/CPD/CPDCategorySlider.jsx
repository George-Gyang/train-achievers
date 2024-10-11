import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CPDOnlineCourse from "./CPDOnlineCourse";
import CPDCategory from "./CPDCategory";

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
            url: "https://www.care-learning.com/images/category/categorya73e8259d18ec6a671f199df79d73cccd8d03edc.png",
        },
        {
            id: 2,
            title: "Carer",
            sum: "Gain crucial skill essential for a successful career in social...",
            url: "https://www.care-learning.com/images/category/categoryb46d699b05f9a165bf685e18c0b6b0a601e91d29.png",
        },
        {
            id: 3,
            title: "Social Care Worker",
            sum: "Advance Caregiving skills from with inline courses from top ...",
            url: "https://www.care-learning.com/images/category/category4b1da983d9925ff528bd2442cc0026fc7e7c9443.png",
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