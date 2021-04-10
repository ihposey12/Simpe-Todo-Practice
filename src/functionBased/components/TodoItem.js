import React, { useState, useEffect } from 'react'
import styles from './TodoItem.module.css'
import { FaTrash } from 'react-icons/fa'

const TodoItem = (props) => {
//Set State for Editing
    const [editing, setEditing] = useState(false)

    const handleEditing = () => {
        setEditing(true)
    }

//Update by pressing ENTER or ESC
    const handleUpdatedDone = e => {
        if(e.key === 'Enter'){
            setEditing(false)
        }
    }

    //Styling(Not ideal for me taste)
        const completedStyle = {
            fontStyle: 'italic',
            color: '#595959',
            opacity: 0.4,
            textDecoration: 'line-through',
        }

    //Destructured state
        const { completed, id, title } = props.todo

    //Sets viewing edit box to empty or none(if state of editing is true)
    //Sets editing to empty or none(if state of editing is false)
        let viewMode = {}
        let editMode = {}

        if(editing) {
            viewMode.display = 'none'
        } else {
            editMode.display = 'none'
        }

        useEffect(() => {
            return () => {
                console.log('Cleaning Up...')
            }
        }, [])

    return(
        <li className={styles.item}>
            <div onDoubleClick={handleEditing} style={viewMode}>
                <input 
                    type='checkbox' 
                    className={styles.checkbox}
                    checked={completed}
                    onChange={() => props.handleChange(id)}
                /> 
                <button onClick={() => props.delete(id)}>
                    <FaTrash className='trash-icon' />
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
                props.setUpdate(e.target.value, id)
                }}
            onKeyDown={handleUpdatedDone}
            />
        </li>
    )
}


export default TodoItem