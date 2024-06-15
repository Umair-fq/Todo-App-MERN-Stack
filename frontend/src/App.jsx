
import { useEffect, useState } from 'react'
import './App.css'
import Todo from './Components/Todo'
import { baseUrl } from './utils/constants'
import axios from 'axios'
function App() {

  const [todo, setTodo] = useState([])
  const [name, setName] = useState('')


  useEffect (() => {
    axios
      .get(`${baseUrl}/get`)
      .then((res) => setTodo(res.data))
      .catch((err) => console.log(err))
  }, [])

  const saveTodo = () => {
    axios.post(`${baseUrl}/save`, { name })
    .then ((res) => {
      // console.log(res.data)
      setTodo(prevTodos => [...prevTodos, res.data])
      setName('')
    }) //setTodo(res.data)
    .catch((err) => {
      console.log(err);
    })
  }

  const handleDelete = (id) => {
    axios.delete(`${baseUrl}/delete/${id}`)
        .then((res => {
            console.log(res.data);
            setTodo(prevTodos => prevTodos.filter(todo => todo._id !== id));
        }))
        .catch((err) => {
            console.log(err);
        });
}


const handleUpdate = (id, newName) => {
  axios.put(`${baseUrl}/update/${id}`, {name: newName})
  .then((res) => {
    setTodo(prevTodos => prevTodos.map(todo => {
      return todo._id === id ? res.data : todo;
    }))
  })
  .catch((err) => {
    console.error(err);
  })
}
  return (
    <>
      <main>
          <div className="container">
            <h1 className="title">Todos App</h1>
            <div className="input_holder">
              <input value = {name} onChange={(e) => setName(e.target.value)} type="text" placeholder = "Enter todo" />
              <button onClick={saveTodo}>Add</button>
            </div>

            <div className="list">
              {
                todo.map(element => <Todo key = {element._id} value = {element.name} id = {element._id} onDelete = {handleDelete} onUpdate = {handleUpdate}/>)
              }
            </div>
          </div>
      </main>
    </>
  )
}

export default App
