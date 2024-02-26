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



  const phoneRegExp = /^(((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?)?$/;
  export const myPatientSchema = Yup.object({
  firstName: Yup.string().required().label("First Name"),
  lastName: Yup.string().required().label("Last Name"),
  phone:Yup.string().nullable().matches(phoneRegExp, 'Phone number is not valid'),
  email: Yup.string().email().required(),
  gender:Yup.string().required(),
  // dateofBirth:Yup.date('Date of birth is invalid').nullable(),
  heightFeet:Yup.number().transform((value, originalValue) => (originalValue === "" ? null : value)).nullable().min(1).max(10).label("Height (ft)"),
  heightInches:Yup.number().transform((value, originalValue) => (originalValue === "" ? null : value)).nullable().min(1).max(10).label("Height (inchs)"),
  weightLbs:Yup.number().transform((value, originalValue) => (originalValue === "" ? null : value)).nullable().min(1).max(300).label("Weight (lbs)"),
});
  