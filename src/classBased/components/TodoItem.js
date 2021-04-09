import React from 'react'
import styles from './TodoItem.module.css'

class TodoItem extends React.Component {
//Set State for Editing
    state = {
        editing: false,
    }

//Update by pressing ENTER or ESC
    handleUpdateDone = e => {
        if(e.key === 'Enter' || 'Esc'){
            this.setState({ editing: false })
        }
    }

    componentWillUnmount = () => {
        console.log('Cleaning up...')
    }

    render() {
    //Styling(Not ideal for me taste)
        const completedStyle = {
            fontStyle: 'italic',
            color: '#595959',
            opacity: 0.4,
            textDecoration: 'line-through',
        }

    //Destructured state
        const { completed, id, title } = this.props.todo

    //Switch state of Editing to True(On double click)
        const handleEditing = () => {
            this.setState({
                editing: true,
            })
        }

    //Sets viewing edit box to empty or none(if state of editing is true)
    //Sets editing to empty or none(if state of editing is false)
        let viewMode = {}
        let editMode = {}

        if(this.state.editing) {
            viewMode.display = 'none'
        } else {
            editMode.display = 'none'
        }

        return(
            <li className={styles.item}>
                <div onDoubleClick={handleEditing} style={viewMode}>
                    <input 
                        type='checkbox' 
                        className={styles.checkbox}
                        checked={completed}
                        onChange={() => this.props.handleChange(id)}
                    /> 
                    <button onClick={() => this.props.delete(id)}>
                        Delete
                    </button>
                    <span style={completed ? completedStyle : null}>
                        {title}
                    </span>
                </div>
                <input 
                type='text' 
                className={styles.textInput} 
                style={editMode} 
                value={title} 
                onChange={e => {
                    this.props.setUpdate(e.target.value, id)
                    }}
                onKeyDown={this.handleUpdateDone}
                />
            </li>
        )
    }
}

export default TodoItem