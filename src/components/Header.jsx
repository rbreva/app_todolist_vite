import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
      <header className="header">
        <h1 className="header__title">To Do List</h1>
        <button className="header__btn">
          Hide Completed
          <FontAwesomeIcon icon={faEyeSlash} className="header__icon-btn" />
        </button>
      </header>  
    );
}
 
export default Header;