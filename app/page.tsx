export default function Home(): void {
  const token: string | null = localStorage.getItem("token");
  if (!token) {
    window.location.href = "/login";
  } else {
    window.location.href = "/chronicles";
  }
}
