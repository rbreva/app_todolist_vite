import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";

// eslint-disable-next-line react/prop-types
const Header = ({showCompleted, changeShowCompleted}) => {
  const toggleCompleted = () => {
    changeShowCompleted(!showCompleted);
  }

  return (
      <header className="header">
        <h1 className="header__title">To Do List</h1>
        {showCompleted ?
          <button 
            className="header__btn"
            onClick={() => toggleCompleted()}
          >
            Hide Completed
            <FontAwesomeIcon icon={faEyeSlash} className="header__icon-btn" />
          </button>
          :
          <button 
            className="header__btn"
            onClick={() => toggleCompleted()}
          >
            Show Completed
            <FontAwesomeIcon icon={faEye} className="header__icon-btn" />
          </button>
        }
      </header>  
    );
}
 
export default Header;