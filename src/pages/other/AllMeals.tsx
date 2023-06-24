import { MealCard } from "./MealCard.tsx";
import { useEffect, useState } from "react";
import axios from "axios";

interface Meal {
  id: number;
  name: string;
  description: string;
  price: number;
  admin_mage: string;
  admin_data:{
    name: string;
  }
}

export default function AllMeals() {
  const [data, setData] = useState<Meal[]>([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:3000/meals")
      .then((res) => {
        console.log(res.data.data);
        // console.log(res.data.data[0].admin_mage);
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
          {/* <p>{meal.description}</p>
          <p>{meal.price}</p> */}
          {/* Add any other desired meal data */}
          <MealCard
            image={""}
            category={""}
            title={""}
            date={""}
            author={{
              name: meal.admin_data.name,
              avatar: meal.admin_mage,
            }}
          />
        </div>
      ))}
    </>
  );
}
