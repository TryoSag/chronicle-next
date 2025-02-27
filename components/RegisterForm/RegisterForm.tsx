import { JSX, useState } from "react";

const RegisterForm = (): JSX.Element => {
  const emptyRegisterForm = {
    name: "",
    email: "",
    password: "",
  };
  const inicialValidateData = {
    name: false,
    email: false,
    password: false,
  };
  const regexEmail = new RegExp(
    "[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}"
  );
  const regExPassword = new RegExp("^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$");

  const [formData, setFormData] = useState(emptyRegisterForm);
  const [validateData, setValidateData] = useState(inicialValidateData);
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
    setTooltip(event.target.id);
  };

  const tooltipText = (
    event:
      | React.MouseEvent<HTMLInputElement>
      | React.FocusEvent<HTMLInputElement>
  ): void => {
    const targetId = (event.target as HTMLInputElement).id || "";

    setTooltip(targetId);
  };
  const resetTooltipText = (): void => setTooltip("");

  const formSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // register a back
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
            maxLength={20}
            value={formData.name}
            onChange={updateForm}
            onMouseEnter={tooltipText}
            onMouseLeave={resetTooltipText}
            onFocus={tooltipText}
            onBlur={resetTooltipText}
          />
          {tooltip === "name" && (
            <span>Name must be less than 20 characters</span>
          )}
          <i>{validateData.name ? "O" : "X"}</i>
        </label>
        <label htmlFor="email" className="email-input">
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={updateForm}
            onFocus={tooltipText}
            onBlur={resetTooltipText}
          />
          <i>{validateData.email ? "O" : "X"}</i>
        </label>
        <label htmlFor="password" className="password-input">
          <input
            type="password"
            id="password"
            placeholder="Password"
            maxLength={16}
            value={formData.password}
            onChange={updateForm}
            onMouseEnter={tooltipText}
            onMouseLeave={resetTooltipText}
            onFocus={tooltipText}
            onBlur={resetTooltipText}
          />
          {tooltip === "password" && (
            <span>
              Password must be between 8 and 16 characters, contain at least one
              numeric digit, one uppercase and one lowercase letter
            </span>
          )}
          <i>{validateData.password ? "O" : "X"}</i>
        </label>
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
