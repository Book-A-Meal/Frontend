import "./../dashboard.css";
import axios from "axios";
import { Group, TextInput, Textarea, NumberInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { IconCheck, IconX } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface EditFormPostProps {
  id: number;
}

function EditFormPost({ id }: EditFormPostProps) {
//   useEffect(() => {
//     axios
//       .put(`http://127.0.0.1:3000/meals/${id}`)
//       .then((res) => {
//         console.log(res.data.data);
//         // console.log(res.data.data[0].admin_mage);
//         // setData(res.data.data);
//       })
//       .catch((error) => {
//         // Handle error state or display error message
//         console.error(error);
//       });
//   }, []);


  const navigate = useNavigate();
  // getting id from localStorage
  const uid = localStorage.getItem("id");

  const [number, setNumber] = useState<number | "">(0);
  const [file, setFile] = useState<any>();
  const form = useForm({
    initialValues: {
      name: "",
      description: "",
    },

    //   validate: yupResolver(loginValidator),
  });
  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formItem = new FormData();

    formItem.append("name", form.values.name);
    formItem.append("description", form.values.description);
    formItem.append("price", number);
    formItem.append("file", file);

    console.log(formItem);
    fetch("http://localhost:3000/meals", {
      method: "POST",
      body: formItem,
    })
      .then((res) => {
        if (!res.ok) {
          notifications.show({
            title: "Failed",
            message: "Ooops! something went wrong while updating the meal 🤥",
            color: "red",
            autoClose: 1800,
            icon: <IconX />,
          });
          throw new Error("Can't perform request");
        }
        return res.json();
      })
      .then((data) => {
        if (data) {
          notifications.show({
            title: data.message,
            message: "Meal updated successfuly 🤥",
            color: "green",
            autoClose: 1800,
            icon: <IconCheck />,
          });
          navigate("/home");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="newMealContainer">
      <span className="header">Add a new meal</span>
      <form onSubmit={form.onSubmit((values) => values)}>
        <TextInput
          withAsterisk
          label="Name"
          placeholder="Enter your name"
          {...form.getInputProps("name")}
        />

        <NumberInput
          placeholder="Price"
          label="Price"
          withAsterisk
          min={1}
          onChange={(val) => setNumber(val)}
        />

        <Textarea
          withAsterisk
          label="Description"
          placeholder="Enter your description"
          {...form.getInputProps("description")}
        />

        <label>
          Upload files
          <br />
          <input
            type="file"
            placeholder="Upload Your Image"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </label>

        <Group position="left" mt="md">
          <button type="submit" onClick={submitForm}>
            Add Meal
          </button>
        </Group>
      </form>
    </div>
  );
}

export default EditFormPost;
