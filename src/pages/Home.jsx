import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import image from "../assets/svg/live2.svg"
import PathCard from '../components/home/PathCard'
import IntervewsCard from '../components/home/IntervewsCard'

const Home = () => {
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
            <Container className='my-5'>
                <Row>
                    <Col md={6}>
                        <div className=" text-dark mb-4 mb-md-0">
                            <p className='secondary_color fw-semibold'>We give you the tools to land your dream job</p>
                            <h1 className='display-5 my-4 fw-semibold'>Comprehensive, skills-driven interview prep</h1>
                            <p>Built by experts from McKinsey, BCG, Google and Amazon.</p>
                            <button className='btn mt-4 secondary_bg hover_effect text-white custom_btn border-2 p-3 px-4 fw-semibold f-5' >Sign up today</button>
                        </div>
                    </Col>
                    <Col md={6}>
                        {activate && (
                            <div>
                                <img src={image} alt="" className="" />
                            </div>)}
                    </Col>
                </Row>
            </Container>
            <div style={{ backgroundColor: "rgba(92, 166, 224, 0.1)" }} className='py-5'>
                <Container>
                    <p className="fw-semibold primary_color text-center">Pick your path</p>
                    <div className="d-flex justify-content-center">
                        <div className="col-md-6">
                            <p className="text-center">Select the best module for you, or combine any together if you're exploring multiple career paths.</p>
                        </div>
                    </div>
                    <div className="my-4">
                            <PathCard />
                    </div>
                </Container>
            </div>
            <div className='py-5'>
                <Container>
                    <div className="d-flex justify-content-center">
                        <div className="col-md-8">
                            <p className="fw-semibold fs-2 primary_color text-center">All-in-one interview preparation</p>
                        </div>
                    </div>
                    <div className="my-4">
                        <IntervewsCard />
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Home