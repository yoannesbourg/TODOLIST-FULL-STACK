import React from 'react'
import './Item.css'

const Item = ({ id, text, checked }) => {

    const handleCheck = () => {

    }

    const handleDelete = () => {
        
    }

    return (
        <div className='item'>
          <h3 className='item-text'>
            {text}
          </h3>
          <div className='item-actions'>
            <input
              className='item-check'
              onChange={handleCheck}
              type='checkbox'
              checked={checked}
            />
            <button
              className='item-delete'
              onClick={handleDelete}
              type='button'
            >
              {' X '}
            </button>
          </div>
        </div>
      )
}

export default Item