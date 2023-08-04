import Task from "./Task";

const ListTasks = ({tasks}) => {
  return (
    <ul className="list-tasks">
      {
      tasks.length > 0 ? tasks.map((task) => {
        return <Task 
                  key={task.id}
                  task={task}
                />
      })
      : <div className="list-tasks__msj">- There are no tasks added -</div>
      }
    </ul>
  );
};

export default ListTasks;