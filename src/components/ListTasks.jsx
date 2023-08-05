/* eslint-disable react/prop-types */
import Task from "./Task";

const ListTasks = ({tasks, changeTasks}) => {
  const toogleCompleted = (id) => {
    changeTasks(tasks.map((task) => {
      if(task.id === id) {
        return {...task, completed: !task.completed}
      }
      return task;
    } ));
  }

  return (
    <ul className="list-tasks">
      {
      // eslint-disable-next-line react/prop-types
      tasks.length > 0 ? tasks.map((task) => {
        return <Task 
                  key={task.id}
                  task={task}
                  toogleCompleted={toogleCompleted}
                />
      })
      : <div className="list-tasks__msj">- There are no tasks added -</div>
      }
    </ul>
  );
};

export default ListTasks;