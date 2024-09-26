import React from 'react'
import image from "../../assets/web/partners.webp"
import PartnerSlider from './PartnerSlider'
const Partners = () => {
    return (
        <div className='container'>
            <p className='fs-3 text-center fw-bold'>Trusted by some of the UK’s biggest brands...
            </p>
            <PartnerSlider>
                <div>
                    <img src={image} className='img-fluid' alt="" />
                </div>
                <div>
                    <img src={image} className='img-fluid' alt="" />
                </div>
                <div>
                    <img src={image} className='img-fluid' alt="" />
                </div>
                <div>
                    <img src={image} className='img-fluid' alt="" />
                </div>
                <div>
                    <img src={image} className='img-fluid' alt="" />
                </div>
                <div>
                    <img src={image} className='img-fluid' alt="" />
                </div>
                <div>
                    <img src={image} className='img-fluid' alt="" />
                </div>
                <div>
                    <img src={image} className='img-fluid' alt="" />
                </div>
            </PartnerSlider>
        </div>
    )
}

export default Partners