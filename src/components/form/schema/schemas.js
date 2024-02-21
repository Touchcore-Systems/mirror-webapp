import * as Yup from "yup";

export const loginformSchema = {
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



const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
export const myPatientSchema = Yup.object({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  phone:Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
  email: Yup.string().email().required(),
  gender:Yup.string().required(),
  date:Yup.date().nullable().required('Date of birth is required'),
  heightFeet:Yup.number().nullable().min(1).max(10),
  heightInches:Yup.number().nullable().min(1).max(10),
  weightLbs:Yup.number().nullable().min(1).max(10),
});
  