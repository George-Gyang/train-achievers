import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { BiConversation } from 'react-icons/bi'
import { BsGraphUpArrow } from 'react-icons/bs'
import { GrAnnounce } from 'react-icons/gr'
import { IoExtensionPuzzleOutline } from 'react-icons/io5'
import { TbMessageStar } from 'react-icons/tb'

const PathCard = () => {
    return (
        <Row className='g-4'>
            <Col md={3}>
                <div className='card h-100 box_shadow shadow_blue border-0 p-3 secondary_bg'>
                    <div className="d-flex justify-content-center text-white">
                        <div className="path_icon bg-primary d-flex justify-content-center align-items-center">
                            <BsGraphUpArrow size={20} />
                        </div>
                    </div>
                    <p className="text-center fs-3 fw-semibold">
                        Management Consulting
                    </p>
                </div>
            </Col>
            <Col md={3}>
                <div className='card h-100 box_shadow shadow_blue border-0 p-3  lemon_bg'>
                    <div className="d-flex justify-content-center text-white">
                        <div className="path_icon bg-success d-flex justify-content-center align-items-center">
                            <TbMessageStar size={20} />
                        </div>
                    </div>
                    <p className="text-center fs-3 fw-semibold">
                        Home Care
                    </p>
                </div>
            </Col>
            <Col md={3}>
                <div className='card h-100 box_shadow shadow_blue light_yellow_bg border-0 p-3  '>
                    <div className="d-flex justify-content-center text-white">
                        <div className="path_icon bg-warning d-flex justify-content-center align-items-center">
                            <GrAnnounce size={20} />
                        </div>
                    </div>
                    <p className="text-center fs-3 fw-semibold">
                        Care Assistant
                    </p>
                </div>
            </Col>
            <Col md={3}>
                <div className='card h-100 box_shadow shadow_blue border-0 p-3  light_danger_bg'>
                    <div className="d-flex justify-content-center text-white">
                        <div className="path_icon bg-danger d-flex justify-content-center align-items-center">
                            <IoExtensionPuzzleOutline size={20} />
                        </div>
                    </div>
                    <p className="text-center fs-3 fw-semibold">
                        Nursing
                    </p>
                </div>
            </Col>
            <Col>
                <div className='card h-100 box_shadow shadow_blue border-0 p-3  light_purple_bg'>
                    <div className="d-flex justify-content-center align-items-center text-white">
                        <div className="path_icon purple_bg d-flex justify-content-center align-items-center">
                            <BiConversation size={20} />
                        </div>

                        <p className="text-center mb-0 ms-3 fs-3 fw-semibold">
                            Behavioural Interviews
                        </p>
                    </div>
                </div>
            </Col>
        </Row>
    )
}

export default PathCard