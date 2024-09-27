import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import image from "../assets/home-hero.webp"
import PathCard from '../components/home/PathCard'
import IntervewsCard from '../components/home/IntervewsCard'
import CourseCard from '../components/flexible-courses/CourseCard'
import CourseSlider from '../components/flexible-courses/CourseSlider'
import Partners from '../components/flexible-courses/Partners'
import AssessmentTypes from '../components/flexible-courses/AssessmentTypes'

const FlexibleCourses = () => {
    const [activate, setActivate] = useState(false)
    // useEffect(() => {
    // setInterval(() => {
    //     setActivate(true)
    // }, 2000)
    setTimeout(() => {
        setActivate(true)
    }, 500);
    // }, [])
    console.log(activate)
    return (
        <div>
            <Container className='mb-'>
                <Row>
                    <Col md={6}>
                        <div className=" text-dark mb-4 pt-5 mb-md-0">
                            <p className='primary_color mb-0 text-uppercase fw-bold'>Unlimited potential</p>
                            <h1 className='display-5 mb-4 fw-bold'>Flexible Online <br /> Training Courses.</h1>
                            <p className='col-md-9'>Flexible online training courses mean you can fit learning in around your lifestyle. We’ve already helped countless people unlock their potential, so what are you waiting for?</p>
                            <button className='btn mt-4 me-3 secondary_bg hover_effect text-white custom_btn border-2 p-2 p-md-3 px-md-4 fw-semibold f-5' >Sign up today</button>
                            <button className='btn  mt-4 btn-outline-black custom_btn hover_secondary_bg border-black border-2 p-2 p-md-3 px-md-4 fw-semibold f-5' >Contact Us</button>
                        </div>
                    </Col>
                    <Col md={6}>
                        {activate && (
                            <div>
                                <img src={image} alt="" className="img-fluid" />
                            </div>)}
                    </Col>
                </Row>
            </Container>
            <div className="container-fluid mb-5">
                {/* <div className="row"> */}
                {/* <div className="col-md-4"> */}
                <CourseSlider>
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                </CourseSlider>
                {/* </div> */}
                {/* </div> */}
            </div>
            <Partners />
            <AssessmentTypes />
        </div>
    )
}

export default FlexibleCourses