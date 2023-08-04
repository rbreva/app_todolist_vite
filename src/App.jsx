import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import FormList from './components/FormList'
import ListTasks from './components/ListTasks'

function App() {
  const [tasks, changeTasks] = useState([
      {
        id: 1,
        name: "Learn React 001",
        completed: false
      },
      {
        id: 2,
        name: "Learn React 002",
        completed: false
      },
      {
        id: 3,
        name: "Learn React 003",
        completed: false
      }
    ]
  );

    console.log(tasks);

  return (
    <div className="container">
      <Header />
      <FormList tasks={tasks} changeTasks={changeTasks} />
      <ListTasks tasks={tasks} changeTasks={changeTasks} />
    </div>
  )
}

export default App
