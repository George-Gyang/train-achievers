import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image from "../../assets/jpg/course-img.jpg"
import { MdGroups } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
function CourseCard() {
    const navigate = useNavigate();

    return (
        <Card className='w-100'>
            <Card.Img variant="top" src={image} />
            <Card.Body className='p-md-5 p-3 navy_bg text-white'>
                {/* <Card.Title>Card Title</Card.Title> */}
                <Card.Text className='fs-5 fw-semibold hover_primary_color'>
                    Level 4 Certificate in Education and Training (CTLLS)
                </Card.Text>
                <p className="fs-5 fw-semibold">£195</p>

                <div className="d-flex">
                    <button onClick={()=> navigate("/course/id")} className='btn mt-4 me-3 secondary_bg hover:bg-sky-600 hover_effect text-white custom_btn border-2 p-2 fw-semibold f-5' >View Course</button>
                    <button className='btn mt-4 me-3 primary_bg hover_effect hover:bg-purple-600 text-white custom_btn border-2 p-2 fw-semibold f-5' >Book Now</button>
                </div>
                <div className="d-flex mt-3">
                    <span className="me-1 primary_color"><MdGroups size={20} /></span>
                    <span className="primary_color me-1">1000+ </span> <span style={{ color: "#c1c2c9" }}>have completed this course</span>
                </div>
            </Card.Body>
        </Card>
    );
}

export default CourseCard;