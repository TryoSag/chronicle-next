"use client";
import { JSX } from "react";
import RegisterForm from "@/components/RegisterForm/RegisterForm";
import Link from "next/link";

const RegisterPage = (): JSX.Element => {
  return (
    <>
      <RegisterForm />
      <Link href="./login">{`Login -->`}</Link>
    </>
  );
};

export default RegisterPage;
