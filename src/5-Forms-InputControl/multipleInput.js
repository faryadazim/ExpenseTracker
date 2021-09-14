import React, { useState  } from "react";
 


const MultipleInput = () => {
    const [persons, setPersons] = useState([])
    const [dataObj, setDataObj] = useState({ firstName: '', age: '', email: '' })
    
    const changeHandler = (e) => {
        const name = e.target.name
        const value = e.target.value
        // let CreateObj = {
        //     [name]:value
        // }
        setDataObj({ ...dataObj, [name]: value })
            console.log(dataObj);
    };
    const submitForm = (e) => {
        e.preventDefault();
        
        if (dataObj.firstName && dataObj.age && dataObj.email) {
            const newDataobj ={...dataObj , id:new Date().getTime().toString()}
              const newPersons = [...persons, newDataobj];
        setPersons(newPersons);
        setDataObj({ firstName: "", age: "", email: "" });
        }
        console.log(persons);
      
    }
  return (
    <>
      <form >
       
        <div>
          <label htmlFor="firstName" className="my-2">
            First Name
          </label>

                  <input
                       
            type="text"
            className="form-control w-50"
            id="firstName"
                      value={dataObj.firstName}
                      name="firstName"
            onChange={changeHandler }
          />
          <label htmlFor="age" className="my-2">
            Age
          </label>
          <input name="age"
            type="text"
            className="form-control w-50"
            id="age"
            value={dataObj.age}
            onChange={ changeHandler }
          />
          <label htmlFor="email" className="my-2">
            Email
          </label>
          <input
            type="email"
            className="form-control w-50"
            id="email"
            value={dataObj.email}
            onChange={ changeHandler}  name="email"
          />
          <button
            className="btn btn-info btn-sm w-50 my-3"
            type="submit"
            onClick={submitForm}
          >
            Add Person
          </button>
        </div>
      </form>
      <ul className="ps-0">
        {persons.map((person) => {
            return (
              <> 
                <input
                  className="form-control w-50 "
                  type="text"
                  defaultValue={person.id}
                />
                <input
                  className="form-control w-50 mb-3"
                  type="text"
                  defaultValue={person.firstName}
                />{" "}
              </>
            );
   })}
      </ul>
    </>
  );
};

export default MultipleInput;
