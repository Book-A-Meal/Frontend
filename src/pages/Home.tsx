import "./home.css";
import { NavLink, useNavigate } from "react-router-dom";
import AllMeals from "./other/AllMeals";
import Footer from "../components/footer/Footer";

function Home() {
  const navigate = useNavigate();
  const isAdmin = localStorage.getItem("isAdmin");
  let route = isAdmin === "true" ? "admins" : "users";
  return (
    <>
      <div className="nav-container">
        <span className="logo">BOOK A MEAL</span>
        {isAdmin && isAdmin === "true" ? (
          <NavLink to="/admin/dashboard" className="link home-link">
            Dashboard
          </NavLink>
        ) : null}

        <div className="btn-group">
          {/* Logout button */}
          <button
            onClick={() => {
              fetch(`http://localhost:3000/${route}/logout`, {
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
      <AllMeals />
      <Footer />
    </>
  );
}

export default Home;
