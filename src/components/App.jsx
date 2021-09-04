import React, { useState } from "react";

function App() {
  // this is distructuring
  // const [fullName , setFullName] = useState ({
  //   fname :"",
  //   lname :"",
  //   email:""

  // })
  const [fname, setF] = useState("");
  const [lname, setL] = useState("");
  const [email, setE] = useState("");
  // a function to reference all values
  function fupdate(event) {
    setF(event.target.value);
  }

  function lupdate(event) {
    setL(event.target.value);
  }
  function eupdate(event) {
    setE(event.target.value);
  }

  return (
    <div className="container">
      <form>
        <h1>
          {" "}
          Hello world {fname}
          {lname}
          {email}
        </h1>
        <input
          onChange={fupdate}
          type="text"
          placeholder="fname"
          value={fname}
          name="fname"
        />
        <input
          onChange={lupdate}
          type="text"
          placeholder="fname"
          value={lname}
          name="lname"
        />
        <input
          onChange={eupdate}
          type="email"
          placeholder="fname"
          value={email}
          name="email"
        />
        <button> click </button>
      </form>
    </div>
  );
}
export default App;
// assigning the object properties to their own components
//onChange method
