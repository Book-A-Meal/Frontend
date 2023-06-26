import { Group, Text, TextInput, Textarea, NumberInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { IconCheck, IconX } from "@tabler/icons-react";
import { useState } from "react";

function AddMeal() {
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
    formItem.append("admin_id", uid);
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
            message: "Ooops! something went wrong when creating meal 🤥",
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
            message: "Happy meal day 🤥",
            color: "green",
            autoClose: 1800,
            icon: <IconCheck />,
          });
          // navigate("/home");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <span>add meal</span>
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
          <Text>Are you and admin? </Text>
          <button type="submit" onClick={submitForm}>
            Add Meal
          </button>
        </Group>
      </form>
    </div>
  );
}

export default AddMeal;
