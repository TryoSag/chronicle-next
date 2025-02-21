import Link from "next/link";
import { JSX } from "react";

export default function Home(): JSX.Element {
  return (
    <div className="background">
      <Link href="./login">{`Login -->`}</Link>
    </div>
  );
}
