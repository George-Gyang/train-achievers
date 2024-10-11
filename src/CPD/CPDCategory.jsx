import React from 'react'

const CPDCategory = ({category}) => {
    return (
        <div>
            <div className="relative">
                <img
                    className='h-[375px] object-cover rounded'
                    src={category.url}
                    alt={`${category.title} image`} />
                <div className="absolute w-full bottom-0 p-2">
                    <div className="backdrop-blur text-white text-sm rounded">
                        <div className="p-3">
                            <p className="h4">{category.title}</p>
                            <p>{category.sum}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CPDCategory