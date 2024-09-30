import React from 'react'

const CourseUnit = ({content}) => {
    return (
        <div className='mb-3'>
            <h3 className="secondary_color mb-3 uppercase font-semibold">{content.unit}</h3>
            <p className="font-semibold mb-3">{content.title}</p>
            <p>{content.summary} </p>
        </div>
    )
}

export default CourseUnit