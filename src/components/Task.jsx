import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faSquare, faEdit, faTimes } from "@fortawesome/free-solid-svg-icons";

// eslint-disable-next-line react/prop-types
const Task = ({task, toogleCompleted, editThisTask, deleteTask}) => {
  const [editTask, changeEditTask] = useState(false);
  // eslint-disable-next-line react/prop-types
  const [newTask, changeNewTask] = useState(task.name);

  const handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line react/prop-types
    editThisTask(task.id, newTask);
    changeEditTask(false);
  }

  return (
    <li className="list-tasks__task">
      <FontAwesomeIcon 
        // eslint-disable-next-line react/prop-types
        icon={task.completed ? faCheckSquare : faSquare }
        className="list-tasks__icon list-tasks__icon-check"
        // eslint-disable-next-line react/prop-types
        onClick={() => toogleCompleted(task.id)}
      />
      <div className="list-tasks__text">
        {editTask ?
        <form action="" className="form-edit-task" onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-edit-task__input"
            value={newTask}
            onChange={(e) => changeNewTask(e.target.value)}
            />
          <button
            type="submit"
            className="form-edit-task__btn"
            >
            Update
          </button>
        </form>
        :
        /* eslint-disable-next-line react/prop-types */
        task.name
        }
      </div>
      <div className="list-tasks__wrapper-botones">
        <FontAwesomeIcon 
          icon={faEdit}
          className="list-tasks__icon list-tasks__icon-accion"
          onClick={() => changeEditTask(!editTask)}
        />
        <FontAwesomeIcon 
          icon={faTimes}
          className="list-tasks__icon list-tasks__icon-accion"
          // eslint-disable-next-line react/prop-types
          onClick={() => deleteTask(task.id)}
        />
      </div>
    </li>
  );
}
 
export default Task;