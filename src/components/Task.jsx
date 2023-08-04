import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faEdit, faTimes } from "@fortawesome/free-solid-svg-icons";

const Task = ({task}) => {
  return (
    <li className="list-tasks__task">
      <FontAwesomeIcon 
        icon={faCheckSquare}
        className="list-tasks__icon list-tasks__icon-check"
      />
      <div className="list-tasks__text">
        {task.name}
      </div>
      <div className="list-tasks__wrapper-botones">
        <FontAwesomeIcon 
          icon={faEdit}
          className="list-tasks__icon list-tasks__icon-accion"
        />
        <FontAwesomeIcon 
          icon={faTimes}
          className="list-tasks__icon list-tasks__icon-accion"
        />
      </div>
    </li>
  );
}
 
export default Task;