"use client";

import { tokenName } from "@/constants/components";
import { useEffect } from "react";
import { checkToken } from "./actions/user/token";

export default function Home(): void {
  const checkAndRedirect = async () => {
    const token: string | null = await localStorage.getItem(tokenName);

    if (token) {
      const validToken = await checkToken(token);
      if (validToken) {
        window.location.href = "/chronicles";
      }
    }
    window.location.href = "/login";
  };

  useEffect(() => {
    checkAndRedirect();
  }, []);
}
