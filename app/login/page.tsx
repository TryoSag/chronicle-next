"use client";
import { JSX } from "react";
import LoginForm from "@/components/LoginForm/LoginForm";
import Link from "next/link";

const LoginPage = (): JSX.Element => {
  return (
    <>
      <LoginForm />
      <Link href="./register">{`Register -->`}</Link>
    </>
  );
};

export default LoginPage;
