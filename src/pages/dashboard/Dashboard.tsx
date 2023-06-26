import { useNavigate } from "react-router-dom";
import "./dashboard.css";
import { Avatar } from "@mantine/core";
import { useState } from "react";
import AddMeal from "./pages/AddMeal";
import EditMeal from "./pages/EditMeal";

function Dashboard() {
  const [component, setComponent] = useState<any>();

  const profile = localStorage.getItem("image");
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  const navigate = useNavigate();
  return (
    <div className="dashboard-container">
      <div className="first-div">
        <div className="top">
          <Avatar src={profile} />
          <span>{name}</span>
          <span>{email}</span>
        </div>
        <div className="middle">
          <button onClick={() => setComponent(<AddMeal />)}>Add Meals</button>
          <button onClick={() => setComponent(<EditMeal />)}>
            Update Meal
          </button>
          {/* <button onClick={() => setComponent()}>Add Meals</button> */}
        </div>
        <div className="bottom">
          <button
            onClick={() => {
              fetch("http://localhost:3000/admins/logout", {
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
      <div className="second-div">{component ? component : <AddMeal />}</div>
    </div>
  );
}

export default Dashboard;
