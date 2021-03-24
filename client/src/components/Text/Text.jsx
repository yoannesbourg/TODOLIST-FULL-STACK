import React, { useState } from 'react'
import '../Item/Item.css'
import EditTextTodo from './EditTextTodo/EditTextTodo'
import TextTodo from './TextTodo/TextTodo'

const Text = ({id, description, edit, handleEdit}) => {
    const [text, setText] = useState(description)


    return (
        <div>
            {edit? 
            <EditTextTodo 
                description={description}
                id={id}
                editState={edit}
                handleEditState={handleEdit}
            /> : 
            <TextTodo 
                description={description}
                
            />}
            
        </div>
    )
}

export default Text