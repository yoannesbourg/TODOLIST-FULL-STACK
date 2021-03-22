import React, { useState } from 'react'
import './Input.css'

const Input = () => {
    const [description, setDescription] = useState('')

    const handleInput = (event) => {
        setDescription(event.target.value)
    }

    const add = () => {
        if (description) {
            console.log(description)
        }
        setDescription('')
    }

    const onSubmitForm = async e => {
        e.preventDefault()
        try {
            const body = {description}
            const response = await fetch("http://localhost:5000/todos", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })

            console.log(response)
        } catch (err) {
            console.error(err.message)
        }
    }

    return (
        <div className='todo-bar'>
            <input 
                className='input'
                placeHolder='write your todo'
                onChange={handleInput}
                value={description}
            />
            <button
                className='button'
                type='submit'
                onClick={onSubmitForm}
            >
                Add
            </button>
        </div>
    )
}

export default Input