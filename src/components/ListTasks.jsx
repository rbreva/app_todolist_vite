/* eslint-disable react/prop-types */
import Task from "./Task";

const ListTasks = ({tasks, changeTasks, showCompleted}) => {
  const toogleCompleted = (id) => {
    changeTasks(tasks.map((task) => {
      if(task.id === id) {
        return {...task, completed: !task.completed}
      }
      return task;
    } ));
  }
  
  const editThisTask = (id, newName) => {
    changeTasks(tasks.map((task) => {
      if(task.id === id) {
        return {...task, name: newName}
      }
      return task;
    } ));
  }

  const deleteTask = (id) => {
    changeTasks(tasks.filter((task) => {
      if(task.id !== id) {
        return task;
      }
      return;
    } ));
  }

  return (
    <ul className="list-tasks">
      {
      // eslint-disable-next-line react/prop-types
      tasks.length > 0 ? tasks.map((task) => {
        if(showCompleted) {
          return <Task 
                    key={task.id}
                    task={task}
                    toogleCompleted={toogleCompleted}
                    editThisTask={editThisTask}
                    deleteTask={deleteTask}
                  />
        } else if(!task.completed) {
          return <Task 
                    key={task.id}
                    task={task}
                    toogleCompleted={toogleCompleted}
                    editThisTask={editThisTask}
                    deleteTask={deleteTask}
                  />        
        }
        return;
      })
      : <div className="list-tasks__msj">- There are no tasks added -</div>
      }
    </ul>
  );
};

export default ListTasks;