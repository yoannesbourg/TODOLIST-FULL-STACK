import React, { useState } from 'react'
import '../../Item/Item.css'

const EditTextTodo = ({todoText, handleEditState, updateText}) => {
    const [description, setDescription] = useState(todoText)

    const handleInput = (event) => {
        setDescription(event.target.value)
        updateText(event.target.value)
    }

    return (
       <div>
            <input 
                className='edit-input'
                value={description}
                onChange={handleInput}
            />
       </div>
    )
}

export default EditTextTodo