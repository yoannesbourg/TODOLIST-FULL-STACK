import React from 'react'

const EditButton = ({handleEdit}) => {
  const openEdit = () => {
    handleEdit()
  }
    return (
        <button 
        onClick={openEdit}
        // onClick={handleEdit}
        className="button"
      >Edit
      </button>
    )
}

export default EditButton