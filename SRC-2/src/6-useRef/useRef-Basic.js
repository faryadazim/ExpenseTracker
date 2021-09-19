import React, { useEffect, useRef } from "react";
// its Just like useState ...Have Preserve value
// its does not ReRendered Dom 
// normly use to control/manage DOM

const UseRefBasic = () => {
  const refContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (refContainer.current.value) {
      console.log(refContainer.current.name);
      console.log(refContainer.current.value);
      console.log(refContainer.current);
      refContainer.current.className += " w-75";
      console.log(refContainer.current);
      refContainer.current.value= null;
    } else {
      refContainer.current.focus();
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="my-2">
          <strong>Name</strong>
        </label>
        <input
          name="name"
          type="text"
          className="form-control w-50"
          placeholder="Write Here"
          ref={refContainer}
        />
        <button type="submit" className="btn btn-info  my-3 w-50 btn-sm">
          submit
        </button>
      </form>
    </>
  );
};

export default UseRefBasic;
