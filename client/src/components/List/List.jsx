import React, { useEffect, useState } from 'react'
import Input from '../Input/Input'
import Item from '../Item/Item'

import '../../App.css'

const item = {
    id: 1,
    text: 'Buy bananas',
    checked: true
}

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
    }, [])

    return (
      <>
        <Input />
        <ul className='list'>
            {todos.map(item => (
                <Item
                key={item.id}
                id={item.id}
                description={item.description}
                checked={false}
              />
            ))}
        </ul>
      </>
    )
  }
  
  export default List