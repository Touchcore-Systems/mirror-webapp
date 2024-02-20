import * as Yup from "yup";

export const LoginformSchema = {
    submitLabel: "Sign In",
    fields: [
      {
        label: "Email",
        name: "email",
        as: "input",
        rules: Yup.string().email('* Email is invalid').required('* Email is required'),
        placeholder: "yourname@yourmail.com",
      },
      {
        label: "Password",
        name: "password",
        as: "input",
        type: "password",
        rules: Yup.string().required('* Password is required'),
        placeholder: "Enter your password",
      },
    ],
  };
  