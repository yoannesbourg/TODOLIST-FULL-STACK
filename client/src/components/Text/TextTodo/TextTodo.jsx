import React from 'react'
import '../../Item/Item.css'

const TextTodo = ({todoText}) => {
    return (
        <h3 className='item-text'>
            {todoText}
        </h3>
    )
}

export default TextTodo