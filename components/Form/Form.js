import React, { useState } from "react";
import "./Form.css";

export default function Form() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");

  const registerHandler = (event) => {
    event.preventDefault();
    let userInfo = {
      firstName,
      lastName,
      email,
    };
    fetch("https://test-37988-default-rtdb.firebaseio.com/userInfo.json", {
      method: "post",
      body: JSON.stringify(userInfo),
    }).then((response) => {
      if (response.status == 200) {
        alert("login succes");
      }
    });
  };
  return (
    <div className="form-container">
      <form
        className="register-form"
        autoComplete="off"
        onSubmit={registerHandler}
      >
        <input
          onChange={(event) => setfirstName(event.target.value)}
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        <input
          onChange={(event) => setlastName(event.target.value)}
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />

        <input
          onChange={(event) => setemail(event.target.value)}
          id="email"
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />

        <button className="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
