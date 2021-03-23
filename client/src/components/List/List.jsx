import React, { useEffect, useState } from 'react'
import Input from '../Input/Input'
import Item from '../Item/Item'

import '../../App.css'
const List = () => {

    const [todos, setTodos] = useState([])

    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:5000/todos")
            const jsonData = await response.json()
            setTodos(jsonData)
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        getTodos()
    }, [todos])

    const deleteItem = id => {
      setTodos(todos.filter(todo => todo.todo_id !== id))
    }

    return (
      <>
        <Input />
        <ul className='list'>
            {todos.map(item => (
                <Item
                key={item.todo_id}
                id={item.todo_id}
                description={item.description}
                checked={false}
                onDelete={deleteItem}
              />
            ))}
        </ul>
      </>
    )
  }
  
  export default List