import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { FaBuildingColumns } from 'react-icons/fa6'
import { LiaClipboardListSolid } from 'react-icons/lia'
import { TbMessageStar } from 'react-icons/tb'
import { Link } from 'react-router-dom'

const IntervewsCard = () => {
    return (
        <Row className='g-4'>
            <Col md={4}>
                <div className="d-flex secondary_color mb-3 justify-content-center">
                    <div>
                        <Link to={""} className='nav-link'>
                            <FaBuildingColumns size={60} />
                        </Link>
                    </div>
                </div>
                <div className="text-center">
                    <p className='fw-semibold fs-5'>
                        <span className='me-2'>1.</span>
                        <span className=''>Drills</span>
                    </p>
                    <p>
                        Targeted drills that help you build and hone the skills tested in consulting and product management interviews
                    </p>
                </div>
            </Col>
            <Col md={4}>
                <div className="d-flex secondary_color mb-3 justify-content-center">
                    <div>
                        <Link to={""} className='nav-link'>
                            <TbMessageStar size={60} />
                        </Link>
                    </div>
                </div>
                <div className="text-center">
                    <p className='fw-semibold fs-5'>
                        <span className='me-2'>2.</span>
                        <span className=''>Coaching</span>
                    </p>
                    <p>
                        Expert consultants and product managers from leading companies like McKinsey & Google who are ready to help you
                    </p>
                </div>
            </Col>
            <Col md={4}>
                <div className="d-flex secondary_color mb-3 justify-content-center">
                    <div>
                        <Link to={""} className='nav-link'>
                            <LiaClipboardListSolid size={60} />
                        </Link>
                    </div>
                </div>
                <div className="text-center">
                    <p className='fw-semibold fs-5'>
                        <span className='me-2'>3.</span>
                        <span className=''>Concept reviews</span>
                    </p>
                    <p>
                        Large library of reviews on key concepts to help get you up to speed fast, from calculating breakevens to making sense of APIs
                    </p>
                </div>
            </Col>
        </Row>
    )
}

export default IntervewsCard