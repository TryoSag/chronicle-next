import { JSX, useState } from "react";

const LoginForm = (): JSX.Element => {
  const emptyLoginForm = {
    username: "",
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
        <label htmlFor="username" className="username-input">
          <input
            type="text"
            id="username"
            placeholder="Username"
            value={formData.username}
            onChange={updateForm}
          />
        </label>
        <label htmlFor="password" className="password-input">
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={formData.password}
            onChange={updateForm}
          />
        </label>
        <button
          type="submit"
          disabled={formData.username === "" || formData.password === ""}
          className="button-loginForm"
        >
          Login
        </button>
      </form>
    </main>
  );
};

export default LoginForm;
