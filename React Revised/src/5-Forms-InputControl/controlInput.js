import React, { useState, useEffect } from "react";

// // JS
//  var input= document.getElementById('root').value
// // in React
//  we use onChange and Value
// <<<< ... There are two type of Input in React ControledInput and unConytolled Input  any ways we will discuss uncontrolled input on useRef .... >>>>
const ControlInput = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [persons, setPersons] = useState([])
    useEffect(() => {
    
    console.log("before persons:", persons);
    }, [])
  const handleSubmit = (e) => {
      e.preventDefault();
    //   console.log("Whole Form Data", e);
      if (email && name) {
          
          let objCreated = {
            name,
               email
          }
          setPersons(() => {  return  [...persons, objCreated]
          }  )
              console.log(" after persons:", persons);
      } else {
          console.log('Empty Value');
      }
      setEmail('')
      setName('')

  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        {" "}
        {/* Preffer to use Here  */}
        <div>
          <label htmlFor="firstName" className="my-2">
            First Name
          </label>

          <input
            type="text"
            className="form-control w-50"
            id="firstName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email" className="my-2">
            Email
          </label>
          <input
            type="email"
            className="form-control w-50"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="btn btn-info btn-sm w-50 my-3"
            type="submit"
            onClick={handleSubmit}
          >
            Add Person
          </button>
        </div>
      </form>
      <ul className="ps-0">
        {persons.map((person) => {
          return (
            <input
              className="form-control w-50 mb-3"
              type="text"
              defaultValue={person.name }
            />
          );
        })}
      </ul>
    </>
  );
};

export default ControlInput;
