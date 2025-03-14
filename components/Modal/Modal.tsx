import { JSX } from "react";

interface propsModal {
  open: boolean;
  children: JSX.Element;
}

const Modal = ({ open, children }: propsModal): JSX.Element => {
  return (
    <>
      {open && (
        <div className="modal">
          <div className="modal-content">{children}</div>
        </div>
      )}
    </>
  );
};
export default Modal;
