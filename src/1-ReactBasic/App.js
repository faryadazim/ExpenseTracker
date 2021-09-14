import React from "react";
import "../App.css";
// import PropsPass from "./1-ReactBasic/PropsPass2";
// import Class3 from "./1-ReactBasic/Class3.js";
const App = () => {
  let list = [{ name: "Ali" }, { name: "khan" }, { name: "Hyderabadi" }];

  return (
    <>
      {/* <PropsPass /> */}
      {/* <Class3 /> */}
      {list.map((item) => (
        <h2>{item.name}</h2>
      ))}
      {/* <div className="box">hello</div> */}
      <div className="boc">
        {/* <div className="new"> */}
        {/* { here we can only u
    se JS whicj return something} */}
        {/* ;
          <Book time1="Morning" time2="Evening">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque labore ipsum fuga?
            </p>
          </Book> */}
        {/* <Book /> */} {/* </div> */}
        {/* <div className="new1"></div>
        <div className="new2"></div>
        <div className="new3"></div>
        <div className="new4"></div>
        <div className="new1"></div>
        <div className="new2"></div>
        <div className="new3"></div>
        <div className="new4"></div> */}
      </div>
    </>
  );
};

export default App;

// const Book = ({ time1, children }) => {
const Book = (props) => {
  // const { time1, time2 } = props; //use oringnal key of Obj
  // console.log(time1);
  // return <h2>Hello {props.time1}</h2>;
  console.log(props);
  return (
    <>
      <h2>Hello </h2>
      {props.children}
      {/* {children} */}
      {/* // <h2>Hello {second}</h2></> */}
    </>
  );
};
