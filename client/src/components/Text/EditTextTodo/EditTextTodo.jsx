import React, { useState } from 'react'
import '../../Item/Item.css'

const EditTextTodo = ({description, id}) => {
    const [input, setInput] = useState(description)

    const handleInput = (event) => {
        console.log(event.target.value)
        setInput(event.target.value)
    }

    const handleKeyDown = (event) => {
        if(event.keyCode === 13) {
            console.log('yes!')
        }
    }
    const updateTodo = async (e) => {
        console.log(id)
        try {
            const body = description
            const response = await fetch(`http://localhost:5000/todos/${id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
          })

          console.log(response)
        } catch (err) {
          console.error(err.message)
        }
    }

    return (
       <div>
            <input 
                className='edit-input'
                value={input}
                onChange={handleInput}
                onKeyDown={handleKeyDown}
            />

            <button
                onClick={updateTodo}
            >Update</button>
       </div>
    )
}

export default EditTextTodo