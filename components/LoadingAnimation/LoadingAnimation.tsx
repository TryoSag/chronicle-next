import { JSX } from "react";

const LoadingAnimation = (): JSX.Element => {
  return (
    <svg className="ring" viewBox="25 25 50 50" stroke-width="5">
      <circle cx="50" cy="50" r="20" />
    </svg>
  );
};

export default LoadingAnimation;
