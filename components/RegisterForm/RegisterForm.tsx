import register from "@/app/actions/user/register";
import { JSX, useState } from "react";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";
import token from "@/app/actions/user/token";

const RegisterForm = (): JSX.Element => {
  const emptyRegisterForm = {
    name: "",
    email: "",
    password: "",
  };
  const inicialFeedback = {
    tooltip: "",
    loading: false,
    notifications: "",
    validateData: {
      name: false,
      email: false,
      password: false,
    },
  };
  const regexEmail = new RegExp(
    "[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}"
  );
  const regExPassword = new RegExp("^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$");

  const [formData, setFormData] = useState(emptyRegisterForm);
  const [feedback, setFeeback] = useState(inicialFeedback);

  const updateForm = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
    switch (event.target.id) {
      case "name":
        setFeeback({
          ...feedback,
          validateData: {
            ...feedback.validateData,
            name:
              event.target.value.length > 0 && event.target.value.length < 20,
          },
        });
        break;
      case "email":
        setFeeback({
          ...feedback,
          validateData: {
            ...feedback.validateData,
            email: regexEmail.test(event.target.value),
          },
        });
        break;
      case "password":
        setFeeback({
          ...feedback,
          validateData: {
            ...feedback.validateData,
            password: regExPassword.test(event.target.value),
          },
        });
        break;
      default:
    }
    setFeeback({ ...feedback, tooltip: event.target.id });
  };

  const tooltipText = (
    event:
      | React.MouseEvent<HTMLInputElement>
      | React.FocusEvent<HTMLInputElement>
  ): void => {
    const targetId = (event.target as HTMLInputElement).id || "";

    setFeeback({ ...feedback, tooltip: targetId });
  };
  const resetTooltipText = (): void => setFeeback({ ...feedback, tooltip: "" });

  const formSubmit = async (event: { preventDefault: () => void }) => {
    setFeeback({ ...feedback, loading: true });
    event.preventDefault();
    const { status, message, data } = await register({
      name: formData.name,
      email: formData.email,
      pass: formData.password,
    });
    if (status) {
      const { userToken } = token({ id: data.id, name: data.name || "User" });
      localStorage.setItem("token", userToken);
      window.location.href = "/";
    }

    setFeeback({ ...feedback, loading: false, notifications: message });
    setFormData(emptyRegisterForm);
  };

  return (
    <main className="container-RegisterForm">
      {feedback.loading ? (
        <LoadingAnimation />
      ) : (
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
            {feedback.tooltip === "name" && (
              <span>Name must be less than 20 characters</span>
            )}
            <i>{feedback.validateData.name ? "O" : "X"}</i>
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
            <i>{feedback.validateData.email ? "O" : "X"}</i>
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
            {feedback.tooltip === "password" && (
              <span>
                Password must be between 8 and 16 characters, contain at least
                one numeric digit, one uppercase and one lowercase letter
              </span>
            )}
            <i>{feedback.validateData.password ? "O" : "X"}</i>
          </label>
          <button
            type="submit"
            disabled={
              !feedback.validateData.name ||
              !feedback.validateData.email ||
              !feedback.validateData.password
            }
          >
            Register
          </button>
        </form>
      )}
    </main>
  );
};

export default RegisterForm;
