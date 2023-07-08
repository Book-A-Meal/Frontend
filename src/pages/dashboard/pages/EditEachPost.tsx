import { useState } from "react";
import "./../../other/meal.css";
import { useNavigate } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";

interface MealCardProps {
  id: number;
  image: string;
  category: string;
  title: string;
  date: string;
  description: string;
  author: {
    id: number;
    name: string;
    avatar: string;
  };
}

export function EditEachPost({
  id,
  image,
  category,
  title,
  date,
  description,
  author,
}: MealCardProps) {
    const uid = id
//   const navigate = useNavigate();
  return (
    <div className="container cardContainer" onClick={() => console.log(uid)}>
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
    </div>
  );
}
