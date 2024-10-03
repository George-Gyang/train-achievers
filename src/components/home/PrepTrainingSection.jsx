import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { BiConversation } from 'react-icons/bi'
import { BsGraphUpArrow } from 'react-icons/bs'
import { GrAnnounce } from 'react-icons/gr'
import { IoExtensionPuzzleOutline } from 'react-icons/io5'
import { TbMessageStar } from 'react-icons/tb'
import PathCard from '../prep-training/PathCard'

const PrepTrainingSection = () => {
    return (
        <section className='my-5 py-5'> 
            <div  data-aos="fade-up" className="container">
                <h3 className="h4">Preparing for an Interview?</h3>
                <p className="text-lg mb-4 font-medium">Get prepared</p>
                <PathCard/>
            </div>
        </section>
    )
}

export default PrepTrainingSection