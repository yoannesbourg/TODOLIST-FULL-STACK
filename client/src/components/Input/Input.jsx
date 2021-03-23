import React, { useState } from 'react'
import './Input.css'

const Input = () => {
    const [description, setDescription] = useState('')

    const handleInput = (event) => {
        setDescription(event.target.value)
    }

    const add = async e => {
        e.preventDefault()
        if(description) {
            try {
                const body = {description}
                 await fetch("http://localhost:5000/todos", {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(body)
                })
                setDescription('')
            } catch (err) {
                console.error(err.message)
            }
        } 
    }

    const handleKeyDown = (event) => {
        if(event.keyCode === 13) {
            add(event)
        }
    }

    return (
        <div className='todo-bar'>
            <input 
                className='input'
                placeHolder='write your todo'
                onChange={handleInput}
                value={description}
                onKeyDown={handleKeyDown}
            />
            <button
                className='button'
                type='submit'
                onClick={add}
            >
                Add
            </button>
        </div>
    )
}

export default Input