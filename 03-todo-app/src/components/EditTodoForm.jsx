import React, { useState } from 'react'

export const EditTodoForm = ({editTodo, task}) => {
  const [ value, setValue ] = useState(task.task)

  const handleSubmit = e => {
    e.preventDefault();

    editTodo(value, task.id);
    setValue('');
  }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input 
            type='text' 
            className='todo-input' 
            value={value}
            placeholder='Actualizar tarea'
            onChange={(e) => setValue(e.target.value)}
        >
        </input>
        <button type='submit' className='todo-btn'>Actualizar tarea</button>
    </form>
  )
}
