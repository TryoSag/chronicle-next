import { cloneElement, JSX } from "react";

interface propsModal {
  open: boolean;
  closeModalAction: () => void;
  children: JSX.Element;
}

const Modal = ({
  open,
  closeModalAction,
  children,
}: propsModal): JSX.Element => {
  const childWithProps = cloneElement(children, {
    closeModalAction,
  });
  return (
    <>
      {open && (
        <div className="modal">
          <div className="modal-content">{childWithProps}</div>
        </div>
      )}
    </>
  );
};
export default Modal;
