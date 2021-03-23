import React, { useState } from 'react'
import '../Item/Item.css'

const TextTodo = ({description}) => {
    return (
        <h3 className='item-text'>
            {description}
        </h3>
    )
}

const EditTextTodo = ({description}) => {
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


    return (
        <input 
                className='edit-input'
                value={input}
                onChange={handleInput}
                onKeyDown={handleKeyDown}
            />
    )
}

const Text = ({description, edit, handleEdit}) => {
    const [text, setText] = useState(description)


    return (
        <div>
            {edit? 
            <EditTextTodo 
                description={description}
            /> : 
            <TextTodo 
                description={description}
                
            />}
            
        </div>
    )
}

export default Text