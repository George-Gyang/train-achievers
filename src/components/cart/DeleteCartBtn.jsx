import React from 'react'

const DeleteCartBtn = ({deleteFunc, cartId, isDeleting}) => {

    return (
        <div>
            <button
            disabled={isDeleting}
            onClick={()=> deleteFunc(cartId)}
             className='px-3 py-2 rounded btn btn-danger text-white'>Delete</button>
        </div>
    )
}

export default DeleteCartBtn