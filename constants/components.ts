// Register and Login components
export const tokenName = "tokenChronicles";
export const defaultName = "User";

export const regexEmail = new RegExp(
  "[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}"
);
export const regExPassword = new RegExp(
  "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$"
);

//RegisterForm component
export const emptyRegisterForm = {
  name: "",
  email: "",
  password: "",
};

export const inicialRegisterFeedback = {
  tooltip: "",
  loading: false,
  validateName: false,
  validateEmail: false,
  validatePass: false,
};

export const tooltipRegisterName = "Name must be less than 20 characters";
export const tooltipRegisterEmail =
  "Email must be a valid email address, ___@___.com";
export const tooltipRegisterPass =
  "Password must be between 8 and 16 characters, contain at least numeric digit, one uppercase and one lowercase letter";

//LoginForm component
export const emptyLoginForm = {
  email: "",
  password: "",
};

export const inicialLoginFeedback = {
  loading: false,
  validateEmail: false,
  validatePass: false,
};
