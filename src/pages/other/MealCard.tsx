import "./meal.css"
import { Avatar } from "@mantine/core";

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
        <span className={title}>{title}</span>
        {/* <div>
          <Avatar size={25} src={author.avatar} />
          <span>{author.name}</span>
        </div> */}
      </div>
      <p>{description}</p>
      <img src={image} height={300} width={300} />
      <span>By {author.name}</span>
    </div>
  );
}
