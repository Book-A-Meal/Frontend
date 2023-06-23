import { TextInput, Group, Box, PasswordInput } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import {
  LoginInput,
  loginValidator,
} from "../../../../utils/validators/auth.validators";
import { useNavigate } from "react-router-dom";
import Nav from "../../../../components/navbar/Nav";
import { showAppNotification } from "../../../../utils/validators/notifications.helpers";

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
          throw new Error("Can't perform request");
        }
        return res.json();
      })
      .then((data) => {
        if (data.data.token) {
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
        showAppNotification({
          title: "Failed",
          message: error,
          isError: true,
        });
        console.log(error)});
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
        <form onSubmit={form.onSubmit((values) =>(values))}>
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
            <button type="submit" onClick={submitForm}>
              Submit
            </button>
          </Group>
        </form>
      </Box>
    </>
  );
}
