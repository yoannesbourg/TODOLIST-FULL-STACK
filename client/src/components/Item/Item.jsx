import React from 'react'
import './Item.css'
import Text from '../Text/Text'

const Item = ({ id, description, onDelete }) => {

    const handleDelete = async id => {
        try {
          await fetch(`http://localhost:5000/todos/${id}`, {
            method: "DELETE"
          })
          onDelete(id)
        } catch (err) {
          console.error(err.message)
        }
    }

    return (
        <div className='item'>
          <Text 
            description={description}
            edit={false}
          />
          <div className='item-actions'>
            <button
              className='item-delete'
              onClick={() => handleDelete(id)}
              type='button'
            >
              {' X '}
            </button>
          </div>
        </div>
      )
}

export default Item