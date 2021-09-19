import React, { useEffect } from "react";

const Modal = ({ modelContent, modalRemover }) => {
  useEffect(() => {
    setTimeout(() => {
      modalRemover();
    }, 3000);
  }, []);
  return (
    <>
      <input
        style={{ borderRadius: "25px" }}
        type="text"
        className="form-control form-control-sm bg-warning  w-100 form=control mt-3 form-control-sm text-center"
        value={modelContent}
      />
    </>
  );
};

export default Modal;
