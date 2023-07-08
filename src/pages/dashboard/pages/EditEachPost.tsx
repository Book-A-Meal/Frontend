import { useState } from "react";
import "./../../other/meal.css";
// import { useNavigate } from "react-router-dom";
import EditFormPost from "./EditPostForm";

interface MealCardProps {
  id: number;
  image: string;
  category: string;
  title: string;
  date: string;
  description: string;
}

export function EditEachPost({
  id,
  image,
  category,
  title,
  date,
  description,
}: MealCardProps) {
  const uid = id;
  const [isFormEdit, setIsFormEdit] = useState<boolean>(false);

  //   const navigate = useNavigate();
  return (
    <div
      className="container cardContainer"
      onClick={() => setIsFormEdit(!isFormEdit)}
    >
      <div>
        <h3 className={title}>{title}</h3>
      </div>
      <p>{description}</p>
      <img
        src={image}
        alt="Image.png"
        height={300}
        width={300}
        style={{
          cursor: "pointer",
        }}
      />
      {isFormEdit ? <EditFormPost id={id} /> : null}
    </div>
  );
}
