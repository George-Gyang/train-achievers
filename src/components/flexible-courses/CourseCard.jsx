import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image from "../../assets/jpg/course-img.jpg"
import { MdGroups } from 'react-icons/md';
function CourseCard() {
    return (
        <Card className='w-100 hover_effect'>
            <Card.Img variant="top" src={image} />
            <Card.Body className='p-5 navy_bg text-white'>
                {/* <Card.Title>Card Title</Card.Title> */}
                <Card.Text className='fs-5 fw-semibold hover_primary_color'>
                    Level 4 Certificate in Education and Training (CTLLS)
                </Card.Text>
                <p className="fs-5 fw-semibold">£195</p>

                <div className="d-flex">
                    <button className='btn mt-4 me-3 secondary_bg hover_effect text-white custom_btn border-2 p-2 fw-semibold f-5' >View Course</button>
                    <button className='btn mt-4 me-3 primary_bg hover_effect text-white custom_btn border-2 p-2 fw-semibold f-5' >Book Now</button>
                </div>
                <div className="d-flex mt-3">
                    <span className="me-1 primary_color"><MdGroups /></span>
                    <span className="">1000+ have completed this course</span>
                </div>
            </Card.Body>
        </Card>
    );
}

export default CourseCard;