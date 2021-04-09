import React, { Component } from 'react'

class InputTodo extends Component {
//Set state for input box of adding new todo.
    state = {
        title: ''
    }

//Update text box with what user types
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

//Submits new todo item unless no item is typed
    handleSubmit = e => {
        e.preventDefault()
        if(this.state.title.trim()) {
            this.props.addTodoItem(this.state.title)
            this.setState({
                title: ''
            })
        } else {
            alert('Please type a Todo!')
        }
    }

    render(){
        return(
            <form className='form-container' onSubmit={this.handleSubmit}>
                <input 
                    type='text' 
                    className='input-text'
                    placeholder='Add Todo...' 
                    value={this.state.title}
                    name='title' 
                    onChange={this.onChange} 
                />
                <button className='input-submit'>Submit</button>
            </form>
        )
    }
}

export default InputTodo