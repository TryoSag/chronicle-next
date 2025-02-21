import { JSX, useState } from "react";

const RegisterForm = (): JSX.Element => {
  const emptyRegisterForm = {
    name: "",
    email: "",
    password: "",
  };
  const regexEmail = new RegExp(
    "[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}"
  );
  const regExPassword = new RegExp("^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$");

  const [formData, setFormData] = useState(emptyRegisterForm);
  const [validateData, setValidateData] = useState({
    name: false,
    email: false,
    password: false,
  });
  const [tooltip, setTooltip] = useState("");

  const updateForm = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
    switch (event.target.id) {
      case "name":
        setValidateData({
          ...validateData,
          name: event.target.value.length > 0 && event.target.value.length < 20,
        });
        break;
      case "email":
        setValidateData({
          ...validateData,
          email: regexEmail.test(event.target.value),
        });
        break;
      case "password":
        setValidateData({
          ...validateData,
          password: regExPassword.test(event.target.value),
        });
        break;
      default:
    }
  };

  const tooltipText = (event: React.MouseEvent<HTMLInputElement>): void => {
    const target = event.target as HTMLInputElement;
    switch (target.id) {
      case "name":
        setTooltip("Name must be less than 20 characters");
        break;
      case "password":
        setTooltip(
          "Password must be between 8 and 16 characters, contain at least one numeric digit, one uppercase and one lowercase letter"
        );
        break;
      default:
        setTooltip("");
    }
  };
  const resetTooltipText = (): void => setTooltip("");

  const formSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    setFormData(emptyRegisterForm);
  };

  return (
    <main className="container-RegisterForm">
      <form
        className="register-form"
        autoComplete="off"
        onSubmit={formSubmit}
        noValidate
      >
        <label htmlFor="name" className="name-input">
          <input
            type="text"
            id="name"
            placeholder="Name"
            autoComplete="off"
            maxLength={20}
            value={formData.name}
            onChange={updateForm}
            onMouseEnter={tooltipText}
            onMouseLeave={resetTooltipText}
          />
          <div>{validateData.name ? "O" : "X"}</div>
        </label>
        <label htmlFor="username" className="username-input">
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={updateForm}
          />
          <div>{validateData.email ? "O" : "X"}</div>
        </label>
        <label htmlFor="password" className="password-input">
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={formData.password}
            onChange={updateForm}
            onMouseEnter={tooltipText}
            onMouseLeave={resetTooltipText}
          />
          <div>{validateData.password ? "O" : "X"}</div>
        </label>
        <span className="container-tooltip">{tooltip}</span>
        <button
          type="submit"
          disabled={
            !validateData.name || !validateData.email || !validateData.password
          }
        >
          Register
        </button>
      </form>
    </main>
  );
};

export default RegisterForm;
