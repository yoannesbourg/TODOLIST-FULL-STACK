import React, { useEffect, useState } from 'react'
import '../Item/Item.css'

const TextTodo = ({description}) => {
    return (
        <h3 className='item-text'>
            {description}
        </h3>
    )
}

const EditTextTodo = ({description}) => {
    return (
        <input 
                className='edit-input'
                value={description}
            />
    )
}

const Text = ({description, edit}) => {
    const [editState, setEditState] = useState(edit)

    const handleClick = () => {
        console.log(editState)
        setEditState(!editState)
    }

    return (
        <div>
            {edit? 
            <EditTextTodo 
                description={description}
            /> : 
            <TextTodo 
                description={description}
                
            />}
            <button onClick={handleClick}>Edit</button>
        </div>
    )
}

export default Text