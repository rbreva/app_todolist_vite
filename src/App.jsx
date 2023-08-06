import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import FormList from './components/FormList'
import ListTasks from './components/ListTasks'

function App() {
  const tasksStorage = 
  localStorage.getItem("tasks") ? 
  JSON.parse(localStorage.getItem("tasks")) : [];
  const [tasks, changeTasks] = useState(tasksStorage);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  let configShowCompleted = '';
  if (localStorage.getItem("showCompleted") === null) {
    configShowCompleted = true;
  } else {
    configShowCompleted = localStorage.getItem("showCompleted") === "true";
  }

  const [showCompleted, changeShowCompleted] = useState(configShowCompleted);
  useEffect(() => {
    localStorage.setItem("showCompleted", showCompleted.toString());
  }, [showCompleted]);

  return (
    <div className="container">
      <Header 
        showCompleted={showCompleted} 
        changeShowCompleted={changeShowCompleted} 
      />
      <FormList tasks={tasks} changeTasks={changeTasks} />
      <ListTasks 
        tasks={tasks} 
        changeTasks={changeTasks}
        showCompleted={showCompleted} 
      />
    </div>
  )
}

export default App
