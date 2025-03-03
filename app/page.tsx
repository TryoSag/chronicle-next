"use client";

import { tokenName } from "@/constants/components";

export default function Home(): void {
  const token: string | null = localStorage.getItem(tokenName);
  if (!token) {
    window.location.href = "/login";
  } else {
    window.location.href = "/chronicles";
  }
}
