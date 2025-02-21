"use client";

import { JSX, useState } from "react";
import LoginForm from "@/components/LoginForm/LoginForm";
import RegisterForm from "@/components/RegisterForm/RegisterForm";

const LoginPage = (): JSX.Element => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open ? <RegisterForm /> : <LoginForm />}
      <button className="button-form" onClick={() => setOpen(!open)}>
        {open ? `Login -->` : `Register -->`}
      </button>
    </>
  );
};

export default LoginPage;
