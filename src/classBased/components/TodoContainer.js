import React from 'react'
import TodoList from './TodoList'
import Header from './Header'
import InputTodo from './InputTodo'
import { v4 as uuidv4 } from 'uuid'

class TodoContainer extends React.Component {
//Set State for TODOS
    state = {
        todos: [],
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

    componentDidUpdate = (prevProps, prevState) => {
        if(prevState.todos !== this.state.todos){
            const temp = JSON.stringify(this.state.todos)
            localStorage.setItem('todos', temp)
        }
    }

    componentDidMount = () => {
        fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
        .then(response => response.json())
        .then(data => this.setState({ todos: data }))
        
        const temp = localStorage.getItem('todos')
        const loadedTodos = JSON.parse(temp)
        if(loadedTodos){
            this.setState({
                todos: loadedTodos
            })
        }
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