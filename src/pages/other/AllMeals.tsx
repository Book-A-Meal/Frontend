import { MealCard } from "./MealCard.tsx";
import { useEffect, useState } from "react";
import axios from "axios";

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
          <MealCard
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
