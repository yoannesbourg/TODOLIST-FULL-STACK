import React, { useState } from 'react'
import './Input.css'

const Input = () => {
    const [text, setText] = useState('')

    const handleInput = (event) => {
        setText(event.target.value)
    }

    const add = () => {
        if (text) {
            console.log(text)
        }
        setText('')
    }

    return (
        <div className='todo-bar'>
            <input 
                className='input'
                placeHolder='write your todo'
                onChange={handleInput}
                value={text}
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