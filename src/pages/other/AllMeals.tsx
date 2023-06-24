// export default AllMeals;
import { useEffect, useState } from "react";
import axios from "axios";

interface Meal {
  id: number;
  name: string;
  description: string;
  price: number;
  // Add any other properties as per your `Meal` type
}

export default function AllMeals() {
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
          <p>{meal.name}</p>
          <p>{meal.description}</p>
          <p>{meal.price}</p>
          {/* Add any other desired meal data */}
        </div>
      ))}
    </>
  );
}
