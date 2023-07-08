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
  admin_data: {
    id: number;
    name: string;
  };
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
  // useEffect(() => {
  //   axios
  //     .get("http://127.0.0.1:3000/meals")
  //     .then((res) => {
  //       console.log(res.data.data);
  //       // console.log(res.data.data[0].admin_mage);
  //       // setData(res.data.data);
  //     })
  //     .catch((error) => {
  //       // Handle error state or display error message
  //       console.error(error);
  //     });
  // }, []);

  return (
    <>
      {data.map((meal) => (
        <div key={meal.id}>
          <EditEachPost
            image={meal.meal_img}
            category={""}
            title={meal.name}
            description={meal.description}
            date={""}
            author={{
              name: meal.admin_data.name,
              avatar: meal.admin_mage,
              id: meal.admin_data.id,
            }}
          />
        </div>
      ))}
    </>
  );
}

export default EditMeal;
