import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { EditEachPost } from "./EditEachPost";

interface Meal {
  meal_img: string;
  id: number;
  name: string;
  description: string;
  price: number;
  admin_mage: string;
}

function EditMeal() {
  const [data, setData] = useState<Meal[]>([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:3000/meals")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((error) => {
        // Handle error state or display error message
        console.error(error);
      });
  }, []);
  

  return (
    <>
      {data.map((meal) => (
        <div key={meal.id}>
          <EditEachPost
            id={meal.id}
            image={meal.meal_img}
            category={""}
            title={meal.name}
            description={meal.description}
            date={""}
          />
        </div>
      ))}
    </>
  );
}

export default EditMeal;
