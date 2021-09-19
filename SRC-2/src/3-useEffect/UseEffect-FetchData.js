import React, { useState, useEffect } from "react";
import Data from "../Api";

const UseEffectFetchData = () => {
  const url = "github.com/users";

  const [users, setUsers] = useState([]);

  const getUserFetch = async () => {
    const response = Data;
    console.log(url);
    // const response = await fetch(url);
    // const users = await response.json();
    //   setUsers(response) //here if we use setusser it will re Rendered component again nd again soo on
    console.log(response);
    setUsers(response);
  };
  useEffect(() => {
    getUserFetch();
  }, []); //this allow us to call this side effect only once << keep in mind >>
  console.log("rendered");
  return (
    <>
      {/* Feetching Data From JSON  */}
      <h3>GitHub User's</h3>
      <ul>
        {users.map((user) => {
          ////here i'm using destructuting
          const { id, name } = user;
          return (
            <li key={user.id}>
              {id} - {name}
            </li>

            ////  here i'm using simpley obj

            //   <li  key={user.id}>
            //       {user.id} - {user.name}
            //    </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
