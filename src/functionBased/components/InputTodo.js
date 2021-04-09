import React, { useState } from "react"

const InputTodo = props => {
  const [inputText, setInputText] = useState({
    title: '',
  })

  const onChange = e => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if(inputText.title.trim()) {
        props.addTodoProps(inputText.title)
        setInputText({
            title: '',
        })
    } else {
        alert("Please Add A Todo...")
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Add Todo..."
          value={inputText.fName}
          name="title"
          onChange={onChange}
        />

        <button className="input-submit">Submit</button>
      </form>
      <h2>{inputText.title}</h2>
    </>
  )
}

export default InputTodo