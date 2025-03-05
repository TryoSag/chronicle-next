import { JSX, useState } from "react";
import { toast } from "react-toastify";
import login from "@/app/actions/user/login";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";
import { generateToken } from "@/app/actions/user/token";
import {
  defaultName,
  emptyLoginForm,
  inicialLoginFeedback,
  regexEmail,
  regExPassword,
  tokenName,
} from "@/constants/components";

const LoginForm = (): JSX.Element => {
  const [formData, setFormData] = useState(emptyLoginForm);
  const [feedback, setFeeback] = useState(inicialLoginFeedback);

  const updateForm = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
    let updateFeedback = { ...feedback };
    switch (event.target.id) {
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
    setFeeback({ ...updateFeedback });
  };

  const formSubmit = async (event: { preventDefault: () => void }) => {
    setFeeback({ ...feedback, loading: true });
    event.preventDefault();
    const { status, message, data } = await login({
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
    setFormData(emptyLoginForm);
  };

  return (
    <main className="container-loginForm">
      {feedback.loading && <LoadingAnimation />}
      <form
        className="login-form"
        autoComplete="off"
        onSubmit={formSubmit}
        noValidate
      >
        <label htmlFor="email" className="email-input">
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={updateForm}
          />
        </label>
        <label htmlFor="password" className="password-input">
          <input
            type="password"
            id="password"
            placeholder="Password"
            maxLength={16}
            value={formData.password}
            onChange={updateForm}
          />
        </label>
        <button
          type="submit"
          disabled={!feedback.validateEmail || !feedback.validatePass}
          className="button-loginForm"
        >
          Login
        </button>
      </form>
    </main>
  );
};

export default LoginForm;
