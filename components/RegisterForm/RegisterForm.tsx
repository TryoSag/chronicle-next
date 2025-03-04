import { JSX, useState } from "react";
import { toast } from "react-toastify";
import register from "@/app/actions/user/register";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";
import generateToken from "@/app/actions/user/token";
import {
  defaultName,
  emptyRegisterForm,
  inicialRegisterFeedback,
  regexEmail,
  regExPassword,
  tokenName,
  tooltipRegisterName,
  tooltipRegisterEmail,
  tooltipRegisterPass,
} from "@/constants/components";

const RegisterForm = (): JSX.Element => {
  const [formData, setFormData] = useState(emptyRegisterForm);
  const [feedback, setFeeback] = useState(inicialRegisterFeedback);

  const updateForm = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
    let updateFeedback = { ...feedback };
    switch (event.target.id) {
      case "name":
        updateFeedback = {
          ...updateFeedback,
          validateName:
            event.target.value.length > 0 && event.target.value.length < 20,
        };
        break;
      case "email":
        updateFeedback = {
          ...updateFeedback,
          validateEmail: regexEmail.test(event.target.value),
        };
        break;
      case "password":
        updateFeedback = {
          ...updateFeedback,
          validatePass: regExPassword.test(event.target.value),
        };
        break;
      default:
    }
    setFeeback({ ...updateFeedback, tooltip: event.target.id });
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
      const { userToken } = await generateToken({
        id: data.id,
        name: data.name || defaultName,
      });
      localStorage.setItem(tokenName, userToken);
      window.location.href = "/";
    }

    setFeeback({ ...feedback, loading: false });
    toast.error(message);
    setFormData(emptyRegisterForm);
  };

  return (
    <main className="container-RegisterForm">
      {feedback.loading && <LoadingAnimation />}
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
          {feedback.tooltip === "name" && <span>{tooltipRegisterName}</span>}
          <i>{feedback.validateName ? "O" : "X"}</i>
        </label>
        <label htmlFor="email" className="email-input">
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={updateForm}
            onMouseEnter={tooltipText}
            onMouseLeave={resetTooltipText}
            onFocus={tooltipText}
            onBlur={resetTooltipText}
          />
          {feedback.tooltip === "email" && <span>{tooltipRegisterEmail}</span>}
          <i>{feedback.validateEmail ? "O" : "X"}</i>
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
            <span>{tooltipRegisterPass}</span>
          )}
          <i>{feedback.validatePass ? "O" : "X"}</i>
        </label>
        <button
          type="submit"
          disabled={
            !feedback.validateName ||
            !feedback.validateEmail ||
            !feedback.validatePass
          }
        >
          Register
        </button>
      </form>
    </main>
  );
};

export default RegisterForm;
