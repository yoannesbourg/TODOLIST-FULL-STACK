import React, { useState } from 'react'
import '../../Item/Item.css'

const EditTextTodo = ({todoText, id, handleEditState, updateText}) => {
    const [description, setDescription] = useState(todoText)

    const handleInput = (event) => {
        setDescription(event.target.value)
        updateText(event.target.value)
    }

    const handleKeyDown = (event) => {
        if(event.keyCode === 13) {
            console.log('yes!')
        }
    }
    // const updateTodo = async (e) => {
    //     e.preventDefault()
    //     try {
            
    //         const body = { description }
    //         const response = await fetch(`http://localhost:5000/todos/${id}`, {
    //         method: "PUT",
    //         headers: {"Content-Type": "application/json"},
    //         body: JSON.stringify(body)
    //       })
    //       window.location = "/"
    //       handleEditState()
    //     } catch (err) {
    //       console.error(err.message)
    //     }
    // }

    return (
       <div>
            <input 
                className='edit-input'
                value={description}
                onChange={handleInput}
                onKeyDown={handleKeyDown}
            />

            {/* <button
                onClick={updateTodo}
                className="button"
            >
                Update
            </button> */}
       </div>
    )
}

export default EditTextTodo