import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Avatar } from "@mantine/core";
import axios from "axios";

interface UserProfile {
  admin: {
    id: number;
    name: string;
    email: string;
    IsAdmin: boolean;
  };
  image: string;
  meals: [];
}

export default function ViewProfile() {
  const { id } = useParams();
  const [data, setData] = useState<UserProfile>();
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:3000/admins/${id}`)
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      })
      .catch((error) => {
        // Handle error state or display error message
        console.error(error);
      });
  }, []);
  return (
    <>
      {data && (
        <div>
          <span>{data.admin.name}</span>
          <div>
            <Avatar size={150} src={data.image} />
          </div>
        </div>
      )}
    </>
  );
}
