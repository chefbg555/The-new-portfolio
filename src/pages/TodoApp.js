import React, { useState } from 'react';


function TodoApp() {
  const [newTodo, setNewTodo] = useState('')
  const [todos, setTodos]= useState([])
  
  function handleNewTodoChange(e) {
    e.preventDefault()
    setNewTodo(e.target.value)
  }
  function handleNewTodo(e){
    e.preventDefault()
    if (newTodo  === '') return
    setTodos([...todos, {id: Date.now(), text: newTodo}])
    e.target.reset()
  }
  function removeTodo(id){
    setTodos(todos.filter((todo)=> todo.id !== id))
  }

  return(
    <div className='component-container'>
      <div className="component">
        <h1 className="header">TODOS</h1>
        <form onSubmit={handleNewTodo} className="form">
          <input placeholder="Your todo..." onChange={handleNewTodoChange}/>
          <ul className="todolist">
            {todos.map((todo) => (
              <li key={todo.id} className="todo"><span>
                {todo.text}</span>

                <a href="#" onClick={() => removeTodo(todo.id)}>
                  X
                </a>
              </li>
            ))}
          </ul>
        </form>
      </div>
    </div>
  )
}
export default TodoApp;