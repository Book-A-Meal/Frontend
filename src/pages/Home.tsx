import { NavLink, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="nav-container">
        <span className="logo">BOOK A MEAL</span>
        <div className="link-group">
          <NavLink to="#" className="link">
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
          <button
            onClick={() => {
              fetch("http://localhost:3000/users/logout", {
                method: "DELETE",
              })
                .then((res) => {
                  if (!res.ok) {
                    throw new Error("Can't perform request");
                  }
                  return res.json();
                })
                .then((data) => {
                  if (data.message === "Logout successful") {
                    localStorage.clear();
                    navigate("/user/login");
                  }
                })
                .catch((error) => console.error(error));
            }}
          >
            Log Out
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
