import React from 'react'
import TodoList from './TodoList'
import Header from './Header'
import InputTodo from './InputTodo'
import { v4 as uuidv4 } from 'uuid'
import '../App.css'

class TodoContainer extends React.Component {
//Set State for TODOS
    state = {
        todos: [
            {
                id: uuidv4(),
                title: 'Setup development environment',
                completed: true
            },
            {
                id: uuidv4(),
                title: 'Develop website and add content',
                completed: false
            },
            {
                id: uuidv4(),
                title: 'Deploy to live server',
                completed: false
            }
        ],
    }

//Handle checkbox change
    handleChange = id => {
        this.setState(prevState => ({
            todos: prevState.todos.map(todo => {
                if(todo.id === id){
                    return {
                        ...todo,
                        completed: !todo.completed,
                    }
                }
                return todo
            })
        }))
    }

//Delete Todo Items
    deleteTodo = id => {
        this.setState({
            todos: [
                ...this.state.todos.filter(todo => {
                    return todo.id !== id
                })
            ]
        })
    }

//Add Todo Items
    addTodoItem = title => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
        }
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }

//Update Todo Items after Editing
    setUpdate = (updateTitle, id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if(todo.id === id){
                    todo.title = updateTitle
                }
                return todo
            })
        })
    }

    render() {
        return(
            <div className='container'>
                <div className='inner'>
                    <Header />
                    <InputTodo addTodoItem={this.addTodoItem} />
                    <TodoList 
                        todos={this.state.todos} 
                        handleChange={this.handleChange} 
                        delete={this.deleteTodo} 
                        setUpdate={this.setUpdate}
                    />
                </div>
            </div>
        )
    }
}

export default TodoContainer