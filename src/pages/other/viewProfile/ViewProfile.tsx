import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ViewProfile() {
    const {id} = useParams()
    console.log(`This is the id: ${id}`)
    const [data, setData] = useState<any>()
    useEffect(() => {
      axios
        .get(`http://127.0.0.1:3000/admins/${id}`)
        .then((res) => {
          console.log(res.data.data.admin);
          setData(res.data.data.admin);
        })
        .catch((error) => {
          // Handle error state or display error message
          console.error(error);
        });
    }, []);
  return (
    <div>ViewProfile</div>
  )
}
