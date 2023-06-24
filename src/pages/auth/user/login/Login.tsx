import { TextInput, Group, Box, PasswordInput, Text } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import {
  LoginInput,
  loginValidator,
} from "../../../../utils/validators/auth.validators";
import { NavLink, useNavigate } from "react-router-dom";
import Nav from "../../../../components/navbar/Nav";
import { notifications } from "@mantine/notifications";
import { IconX, IconCheck } from "@tabler/icons-react";

export function Login() {
  const navigate = useNavigate();
  const form = useForm<LoginInput>({
    initialValues: {
      email: "",
      password: "",
    },

    validate: yupResolver(loginValidator),
  });

  const submitForm = () => {
    const formItem = new FormData();

    formItem.append("email", form.values.email);
    formItem.append("password", form.values.password);

    fetch("http://localhost:3000/user/login", {
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
            message: "Hey there, your code is awesome! 🤥",
            color: "green",
            autoClose: 1800,
            icon: <IconCheck />,
          });
          navigate("/home");
        }
        localStorage.setItem("id", data.data.data.id);
        localStorage.setItem("token", data.data.token);
        localStorage.setItem("name", data.data.data.name);
        localStorage.setItem("isAdmin", data.data.data.isAdmin);
        localStorage.setItem("email", data.data.data.email);
        localStorage.setItem("image", data.data.image);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Nav />
      <Box
        maw={300}
        mx="auto"
        style={{
          marginTop: "10em",
        }}
      >
        <form onSubmit={form.onSubmit((values) => values)}>
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

          <Group position="left" mt="md">
            <Text>
              Are you and admin?{" "}
              <NavLink to="/admin/register"> Login Here</NavLink>
            </Text>
            <button type="submit" onClick={submitForm}>
              Submit
            </button>
          </Group>
        </form>
      </Box>
    </>
  );
}
