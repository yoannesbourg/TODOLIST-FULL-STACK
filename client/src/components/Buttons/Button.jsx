import React from 'react'
import EditButton from './EditButton'
import UpdateButton from './UpdateButton'

const Button = ({edit, handleEdit}) => {
    const setEditState = () => {
        handleEdit()
        console.log(edit)
    }
    return (
        <div>
             { edit? <UpdateButton onClick={setEditState}/> : <EditButton handleEdit={handleEdit}/>}
        </div>
    )
        
    
}

export default Button