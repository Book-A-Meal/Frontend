import "./meal.css";
import { Avatar } from "@mantine/core";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

interface MealCardProps {
  image: string;
  category: string;
  title: string;
  date: string;
  description: string;
  author: {
    name: string;
    avatar: string;
  };
}

export function MealCard({
  image,
  category,
  title,
  date,
  description,
  author,
}: MealCardProps) {
  return (
    <div className="container cardContainer">
      <div>
        <h3 className={title}>{title}</h3>
        {/* <div>
          <Avatar size={25} src={author.avatar} />
          <span>{author.name}</span>
        </div> */}
      </div>
      <p>{description}</p>
      <PhotoProvider>
        <PhotoView src={image}>
          <img
            src={image}
            alt="Image.png"
            height={300}
            width={300}
            style={{
              cursor: "pointer",
            }}
          />
        </PhotoView>
      </PhotoProvider>
      <span>
        By{" "}
        <span
          style={{
            color: "green",
            cursor: "pointer",
          }}
        >
          {author.name}
        </span>
      </span>
    </div>
  );
}
