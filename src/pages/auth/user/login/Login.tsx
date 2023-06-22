import {
  TextInput,
  Button,
  Group,
  Box,
  PasswordInput,
  Text,
} from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import {
  LoginInput,
  loginValidator,
} from "../../../../utils/validators/auth.validators";

export function Login() {
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
        console.log(data)
        // localStorage.setItem("id", data.data.data.id);
        // localStorage.setItem("name", data.data.data.name);
        // localStorage.setItem("email", data.data.data.email);
        // localStorage.setItem("image", data.data.image);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Box maw={300} mx="auto">
      <Text>Login Page</Text>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
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
  );
}
