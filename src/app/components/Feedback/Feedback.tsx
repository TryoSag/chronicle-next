import { JSX } from "react";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";

const Feedback = (): JSX.Element => {
  return (
    <section className="container-feedback">
      {
        //check &&
        <div className="container-check">
          <div className="container-icon">
            <i>
              <svg
                width="40px"
                height="40px"
                stroke-width="3"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#000000"
              >
                <path
                  d="M5 13l4 4L19 7"
                  stroke="#000000"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </i>
          </div>
        </div>
      }
      {
        //cross &&
        <div className="container-cross">
          <div className="container-icon">
            <i>
              <svg
                width="40px"
                height="40px"
                stroke-width="3"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#000000"
              >
                <path
                  d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"
                  stroke="#000000"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </i>
          </div>
        </div>
      }
      {
        //loading &&
        <div className="container-loading">
          <div className="container-icon">
            <LoadingAnimation />
          </div>
        </div>
      }
    </section>
  );
};

export default Feedback;
