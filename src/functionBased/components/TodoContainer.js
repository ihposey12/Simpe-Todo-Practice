import React, { useState, useEffect } from 'react'
import TodoList from './TodoList'
import Header from './Header'
import InputTodo from './InputTodo'
import { v4 as uuidv4 } from 'uuid'

const TodoContainer = () => {
//Set State for TODOS
    const [todos, setTodos] = useState(getInitialTodos())

//Handle checkbox change
    const handleChange = (id) => {
        setTodos(prevState => 
            prevState.map(todo => {
                if(todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })
        )
    }

//Delete Todo Items
    const deleteTodo = (id) => {
        setTodos([
            ...todos.filter(todo => {
                return todo.id !== id
            })
        ])
    }

//Add Todo Items
    const addTodoItem = (title) => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
        }
        setTodos([...todos, newTodo])
    }

//Update Todo Items after Editing
    const setUpdate = (updatedTitle, id) => {
        setTodos(
            todos.map(todo => {
                if(todo.id === id) {
                    todo.title = updatedTitle
                }
                return todo
            })
        )
    }

    function getInitialTodos() {
        const temp = localStorage.getItem('todos')
        const savedTodos = JSON.parse(temp)
        return savedTodos || []
    }

    useEffect(() => {
        const temp = JSON.stringify(todos)
        localStorage.setItem('todos', temp)
    }, [todos])

    return(
        <div className='container'>
            <div className='inner'>
                <Header />
                <InputTodo addTodoProps={addTodoItem} />
                <TodoList 
                    todos={todos} 
                    handleChange={handleChange} 
                    delete={deleteTodo} 
                    setUpdate={setUpdate}
                />
            </div>
        </div>
    )
}

export default TodoContainer