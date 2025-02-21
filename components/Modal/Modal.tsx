import { JSX } from "react";

interface propsModal {
  open: boolean;
  content: () => JSX.Element;
}

const Modal = ({ open, content }: propsModal): JSX.Element => {
  return (
    <>
      {open && (
        <div className="modal">
          <div className="modal-content">{content()}</div>
        </div>
      )}
    </>
  );
};
export default Modal;
