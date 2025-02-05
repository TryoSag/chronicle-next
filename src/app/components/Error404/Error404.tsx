import { JSX } from "react";

const Error404 = (): JSX.Element => {
  return (
    <main className="error404-container">
      <div></div>
      <div className="text-container">
        <span>Error 404</span>
        <span>Page Not Found</span>
      </div>
    </main>
  );
};

export default Error404;
