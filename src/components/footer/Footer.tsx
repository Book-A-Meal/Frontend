import { NavLink } from "react-router-dom";
import "./footer.css";
function Footer() {
  const icons = [
    { link: "#", img: "#", id: 1, name: "Youtube" },
    { link: "#", img: "#", id: 2, name: "Twitter" },
    { link: "#", img: "#", id: 3, name: "LinkedIn" },
  ];
  const navs = [
    { id: 1, name: "Privacy", link: "#" },
    { id: 2, name: "Career", link: "#" },
    { id: 3, name: "About", link: "#" },
  ];
  return (
    <div className="footer-container">
      <span>BOOK A MEAL</span>
      <div className="footer-links">
        {navs.map((li) => {
          return (
            <NavLink key={li.id} to={li.link}>
              {li.name}
            </NavLink>
          );
        })}
      </div>
      <div className="footer-links">
        {icons.map((li) => {
          return (
            <NavLink key={li.id} to={li.link}>
              {li.name}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default Footer;
