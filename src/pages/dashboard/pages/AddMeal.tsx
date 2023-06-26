import { Group, PasswordInput, Text, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";

function AddMeal() {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    //   validate: yupResolver(loginValidator),
  });

  return (
    <div>
      <span>add meal</span>
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
          <Text>Are you and admin? </Text>
          <button type="submit">Add Meal</button>
        </Group>
      </form>
    </div>
  );
}

export default AddMeal;
