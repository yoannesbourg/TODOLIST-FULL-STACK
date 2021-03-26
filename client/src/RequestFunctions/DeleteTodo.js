export const deleteTodo = async (id, deleteFunction) => {
    try {
      await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE"
      })
      deleteFunction(id)
    } catch (err) {
      console.error(err.message)
    }
}