import React , {useEffect} from 'react'

const Modal = ({ showModelContent, closeModal }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 5000);
  });
  return (
    <>
      <p className="form-control w-50 bg-warning text-secondary text-center ">
        {showModelContent}
      </p>
    </>
  );
};

export default Modal
