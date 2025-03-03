// Register and Login components
export const tokenName = "tokenChronicles";
export const defaultName = "User";

//RegisterForm component
export const emptyRegisterForm = {
  name: "",
  email: "",
  password: "",
};

export const inicialFeedback = {
  tooltip: "",
  loading: false,
  notifications: "",
  validateName: false,
  validateEmail: false,
  validatePass: false,
};

export const regexEmail = new RegExp(
  "[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}"
);
export const regExPassword = new RegExp(
  "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$"
);
