import { NavLink, useNavigate } from "react-router-dom";
import "./nav.css";

function Nav() {
  const navigate = useNavigate();
  return (
    <div className="nav-container">
      <span className="logo">BOOK A MEAL</span>
      <div className="link-group">
        <NavLink to="/" className="link">
          All Meals
        </NavLink>
        <NavLink to="#" className="link">
          Careers
        </NavLink>
        <NavLink to="#" className="link">
          Careers
        </NavLink>
        <NavLink to="#" className="link">
          Careers
        </NavLink>
        <NavLink to="#" className="link">
          Careers
        </NavLink>
      </div>
      <div className="btn-group">
        <button onClick={() => navigate("/user/login")}>Login</button>
        <button onClick={() => navigate("/user/register")}>Create</button>
      </div>
    </div>
  );
}

export default Nav;
