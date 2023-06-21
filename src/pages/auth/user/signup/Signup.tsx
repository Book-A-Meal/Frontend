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
  SignupInput,
  signupValidator,
} from "../../../../utils/validators/auth.validators";

export function Signup() {
  const form = useForm<SignupInput>({
    initialValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },

    validate: yupResolver(signupValidator),
  });

  return (
    <Box maw={300} mx="auto">
      <Text>Register Page</Text>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
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

        <Group position="left" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}
