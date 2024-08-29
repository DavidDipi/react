import React, {useState} from 'react'
import { TodoForm } from './TodoForm'
import { Todo } from './Todo'
import { v4 as uuidv4 } from 'uuid'
import { EditTodoForm } from './EditTodoForm';

uuidv4();

export const TodoWrapper = () => {
  const [ todos, setTodos ] = useState([])
  const addTodo = todo => {
    setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
    console.log(todos) 
  }

  const toggleComplete = id => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }

  const editTodo = id => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
  }

  const editTask = (task, id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo))
  } 

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className='TodoWrapper'>
      <h1>Cosas por hacer!</h1>
      <TodoForm addTodo={addTodo} />
      { todos.map((todo, index) => (
        todo.isEditing ? (
          <EditTodoForm 
            editTodo={editTask}
            task={todo}
          />
        ) : (
          <Todo 
            key={index} 
            task={todo} 
            toggleComplete={toggleComplete} 
            editTodo={editTodo} 
            deleteTodo={deleteTodo} 
          />
        )
      ))}
    </div>
  )
}
