import React from "react";

// How to destructure a obj/array
const PropsPass = () => {
  let list = [
    { name: "ali", classN: 6 },
    { name: "Hyder", classN: 2 },
    { name: "Awais Ali Phoka", classN: 4 },
  ];
  //   console.log(list);
  return (
    <>
      {list.map((list) => {
        return <PropComponet {...list} />;
      })}
    </>
  );
};

export default PropsPass;

// Component

const PropComponet = (props) => {
  //   console.log(props);
  const { name, classN } = props;
  // console.log(name, classN);
  //   console.log(name);
  return <p>{name}</p>;
};
