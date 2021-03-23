import React, { useState } from 'react'
import './Item.css'
import Text from '../Text/Text'

const Item = ({ id, description, onDelete }) => {

  const [editState, setEditState] = useState(false)

    const handleEdit = () => {
      console.log(editState)
      setEditState(!editState)
    }

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
            id={id} 
            description={description}
            edit={editState}
            handleEdit={handleEdit}
          />
          <div className='item-actions'>
            <button
              className='item-delete'
              onClick={() => handleDelete(id)}
              type='button'
            >
              X
            </button>
            <button 
              onClick={handleEdit}
              className="edit-button"
            >Edit</button>
          </div>
        </div>
      )
}

export default Item