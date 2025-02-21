import { JSX, useState } from "react";

const RegisterForm = (): JSX.Element => {
  const emptyRegisterForm = {
    name: "",
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(emptyRegisterForm);

  const updateForm = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const formSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    setFormData(emptyRegisterForm);
  };

  // const toLoginButton = () => navigate("/login");

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
            value={formData.name}
            onChange={updateForm}
          />
        </label>
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
          Password
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
          disabled={
            formData.name === "" ||
            formData.username === "" ||
            formData.password === ""
          }
        >
          Register
        </button>
      </form>
      <button
        className="button-toLogin"
        onClick={toLoginButton}
      >{`Login -->`}</button>
    </main>
  );
};

export default RegisterForm;
