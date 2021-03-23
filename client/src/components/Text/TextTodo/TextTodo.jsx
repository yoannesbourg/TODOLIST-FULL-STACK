import React from 'react'
import '../../Item/Item.css'

const TextTodo = ({description}) => {
    return (
        <h3 className='item-text'>
            {description}
        </h3>
    )
}

export default TextTodo