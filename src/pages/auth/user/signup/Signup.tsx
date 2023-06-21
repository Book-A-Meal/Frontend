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

export function Signup() {
  const form = useForm<LoginInput>({
    initialValues: {
      email: "",
      password: "",
    },

    validate: yupResolver(loginValidator),
  });

  return (
    <Box maw={300} mx="auto">
      <Text>Register Page</Text>
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
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}