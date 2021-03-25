import React, { useState } from 'react'
import './Item.css'
import EditTextTodo from '../Text/EditTextTodo/EditTextTodo'
import TextTodo from '../Text/TextTodo/TextTodo'
import { updateTodo } from '../../RequestFunctions/UpdateTodo'
import { deleteTodo } from '../../RequestFunctions/DeleteTodo'


const Item = ({ id, description, onDelete, selected }) => {

  const [isEdit, setIsEdit] = useState(false)
  const [text, setText] = useState(description)

    //Eddit button toggles this state and changes todo in input
    const toggleEdit = () => {
      setIsEdit(!isEdit)
    }

    //Change update todo text status with new description
    const handleTodoChange = newDescription => {
      setText(newDescription)
    }

    return (
        <div className={selected? 'item .selected-item' : 'item'}>
          
          {isEdit? 
            <EditTextTodo 
                todoText={description}
                editState={setIsEdit}
                handleEditState={toggleEdit}
                updateText={handleTodoChange}
            /> : 
            <TextTodo 
                todoText={description}                
            />
          }
                    
          <div className='item-actions'>

            {isEdit? //Is edit state on true?

              // Return Edit button
              <button 
                onClick={(e) => {
                  e.preventDefault()
                  updateTodo(e, text, id, toggleEdit)
                }}
                className="button"
              >
                Update
              </button> 

              : //on false?

              // Return Update button
              <button 
                onClick={toggleEdit}
                className="button"
              >
                Edit
              </button>
            }

            {/* Delete */}
            <button
              className='item-delete button'
              onClick={() => deleteTodo(id, onDelete)}
              type='button'
            >
              X
            </button>
          </div>
        </div>
      )
}

export default Item