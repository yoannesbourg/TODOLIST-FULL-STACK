import React from 'react'
import './Item.css'

const Item = ({ id, text, checked }) => {

    const handleDelete = () => {
        
    }

    return (
        <div className='item'>
          <h3 className='item-text'>
            {text}
          </h3>
          <div className='item-actions'>
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