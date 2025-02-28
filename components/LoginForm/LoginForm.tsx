import { JSX, useState } from "react";

const LoginForm = (): JSX.Element => {
  const emptyLoginForm = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(emptyLoginForm);

  const updateForm = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const formSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // login a back
    setFormData(emptyLoginForm);
  };

  return (
    <main className="container-loginForm">
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
          disabled={formData.email === "" || formData.password === ""}
          className="button-loginForm"
        >
          Login
        </button>
      </form>
    </main>
  );
};

export default LoginForm;
