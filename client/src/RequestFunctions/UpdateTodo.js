export const updateTodo = async ( e,description, id, handleEditFunction) => {
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

