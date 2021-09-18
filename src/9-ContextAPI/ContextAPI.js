import React, { useContext, createContext } from "react";

// >>>______________________________________Root
const Content = createContext();
const ContextAPI = () => {
  // this will give us a provider to distribute all value through root
  const removeFunc = () => {
    console.log("remove");
  };

  return (
    <Content.Provider
      value={{ name: "Alex Blake", role: "Crickter", removeFunc }}
    >
      <Child />
    </Content.Provider>
  );
};
export default ContextAPI;

// >>>______________________________________Child
const Child = () => {
  return (
    <>
      <GrandChild />
    </>
  );
};

// >>>______________________________________Grand-Child
const GrandChild = () => {
  const content = useContext(Content);
  return (
    <>
      <h5 className="my-1">My Name is : {content.name}</h5>
      <p>i'm a {content.role}</p>
      <button className="btn btn-sm btn-info" onClick={content.removeFunc}>
        Call Func
      </button>
    </>
  );
};
