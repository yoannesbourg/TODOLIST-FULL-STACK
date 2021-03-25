import React, { useState } from 'react'
import '../../Item/Item.css'

const EditTextTodo = ({todoText, handleEditState, updateText}) => {
    const [description, setDescription] = useState(todoText)

    const handleInput = (event) => {
        setDescription(event.target.value)
        updateText(event.target.value)
    }

    // const handleKeyDown = (event) => {
    //     if(event.keyCode === 13) {
    //         setDescription(event.target.value)
    //     updateText(event.target.value)
    //     handleEditState()
            
    //     }
    // }

    return (
       <div>
            <input 
                className='edit-input'
                value={description}
                onChange={handleInput}
                // onKeyDown={handleKeyDown}
            />
       </div>
    )
}

export default EditTextTodo