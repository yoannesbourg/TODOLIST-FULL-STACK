import React, { useState } from 'react'
import './Item.css'
import Text from '../Text/Text'
import EditTextTodo from '../Text/EditTextTodo/EditTextTodo'
import TextTodo from '../Text/TextTodo/TextTodo'
import { updateTodo } from '../../RequestFunctions/UpdateTodo'

const Item = ({ id, description, onDelete }) => {

  const [editState, setEditState] = useState(false)

    const handleEdit = () => {
      setEditState(!editState)
    }

    const handleInputOnChange = (newDescription) => {
      return newDescription
    }

    const handleDelete = async id => {
        try {
          const response = await fetch(`http://localhost:5000/todos/${id}`, {
            method: "DELETE"
          })
          onDelete(id)
        } catch (err) {
          console.error(err.message)
        }
    }

   const updateTodo = async ( e,description, id, handleEditFunction) => {
      e.preventDefault()
      try {
          const body = { description }
          const response = await fetch(`http://localhost:5000/todos/${id}`, {
          method: "PUT",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(body)
        })
        window.location = "/"
        handleEditFunction()
      } catch (err) {
        console.error(err.message)
      }
  }

    return (
        <div className='item'>
          
          {editState? 
            <EditTextTodo 
                todoText={description}
                id={id}
                editState={editState}
                handleEditState={handleEdit}
                handleInputOnChange={console.log}
            /> : 
            <TextTodo 
                todoText={description}                
            />}
            <div className='item-actions'>

              {/* Update */}
              <button 
                onClick={(e) => {
                  e.preventDefault()
                  updateTodo(e, 'description', id, handleEdit)}}
                className="button"
              >Update
              </button>

              {/* Edit */}
              <button 
                onClick={handleEdit}
                className="button"
              >Edit
              </button>

              {/* Delete */}
              <button
                className='item-delete button'
                onClick={() => handleDelete(id)}
                type='button'
              >
                X
              </button>
            </div>








          {/* <Text
            id={id} 
            description={description}
            edit={editState}
            handleEdit={handleEdit}
          />
          <div className='item-actions'>
            <button 
              onClick={handleEdit}
              className="button"
            >Edit
            </button>
            <button
              className='item-delete button'
              onClick={() => handleDelete(id)}
              type='button'
            >
              X
            </button>
          </div> */}
        </div>
      )
}

export default Item