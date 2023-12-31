import { TextInput, Group, Box, PasswordInput } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import {
  SignupInput,
  signupValidator,
} from "../../../../utils/validators/auth.validators";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../../../../components/navbar/Nav";
import { notifications } from "@mantine/notifications";
import { IconX, IconCheck } from "@tabler/icons-react";

export function Signup() {
  const navigate = useNavigate();
  const form = useForm<SignupInput>({
    initialValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
    validate: yupResolver(signupValidator),
  });
  const [file, setFile] = useState<any>();

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formItem = new FormData();

    formItem.append("name", form.values.name);
    formItem.append("email", form.values.email);
    formItem.append("password", form.values.password);
    formItem.append("password_confirmation", form.values.password_confirmation);
    formItem.append("file", file);

    console.log(formItem);
    fetch("http://localhost:3000/users", {
      method: "POST",
      body: formItem,
    })
      .then((res) => {
        if (!res.ok) {
          notifications.show({
            title: "Failed",
            message: "Seems there is something wrong 🤥",
            color: "red",
            autoClose: 1800,
            icon: <IconX />,
          });
          throw new Error("Can't perform request");
        }
        return res.json();
      })
      .then((data) => {
        if (data.data.token) {
          notifications.show({
            title: data.message,
            message: "Happy meal day 🤥",
            color: "green",
            autoClose: 1800,
            icon: <IconCheck />,
          });
          navigate("/home");
        }
        localStorage.setItem("id", data.data.data.id);
        localStorage.setItem("token", data.data.token);
        localStorage.setItem("name", data.data.data.name);
        localStorage.setItem("isAdmin", data.data.data.IsAdmin);
        localStorage.setItem("email", data.data.data.email);
        localStorage.setItem("image", data.data.image);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Nav />
      <Box
        maw={300}
        mx="auto"
        style={{
          marginTop: "6em",
        }}
      >
        <form>
          <TextInput
            withAsterisk
            label="Full Name"
            placeholder="Enter your full name"
            {...form.getInputProps("name")}
          />

          <TextInput
            withAsterisk
            label="Email"
            placeholder="your@email.com"
            {...form.getInputProps("email")}
          />

          <PasswordInput
            withAsterisk
            label="Password"
            placeholder="Enter your password"
            {...form.getInputProps("password")}
          />

          <PasswordInput
            withAsterisk
            label="Confirm Password"
            placeholder="Enter your confirmation password"
            {...form.getInputProps("password_confirmation")}
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
              Submit
            </button>
          </Group>
        </form>
      </Box>
    </>
  );
}
