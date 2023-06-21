import * as yup from "yup";

export const loginValidator = yup.object({
  email: yup.string().required(),
  password: yup.string().min(6).required(),
});

export type LoginInput = yup.InferType<typeof loginValidator>;
