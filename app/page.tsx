"use client";

import { tokenName } from "@/constants/components";
import { useEffect } from "react";

export default function Home(): void {
  const checkAndRedirect = async () => {
    const token: string | null = await localStorage.getItem(tokenName);

    if (!token) {
      window.location.href = "/login";
    } else {
      window.location.href = "/chronicles";
    }
  };

  useEffect(() => {
    checkAndRedirect();
  }, []);
}
