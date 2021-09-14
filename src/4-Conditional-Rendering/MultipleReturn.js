import React, { useState, useEffect } from "react";

const MultipleReturn = () => {
  const url = "fakeapi.com";
  // we can return multiple different thing its depend on conditoins
  const [isLoading, setIsloading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("User Default");

  useEffect(() => {
   fetch(url)
     .then((res) => {
       if (res.status>=200 && res.status<=299) {
          res.json()
       } else {
         setIsError(true)
         setIsloading(false)
         throw new Error (res.statusText)
       }
      
     })
     .then((user) => {
        setUser(user.name)
        setIsloading(false)
      })
      .catch((error)=>{console.log('Error : ' , error);});
  }, []);

  if (isLoading) {
    return (
      <>
        <h3> Loading </h3>
      </>
    );
  }
  if (isError) {
    return (
      <>
        <h3> Error </h3>
      </>
    );
  }
  return (
    <>
      <h3> {user} </h3>
    </>
  );
};

export default MultipleReturn;
