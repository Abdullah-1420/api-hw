import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const navigate = useNavigate()
  
  const postdata = () => {
    axios
      .post(`https://62d3e3935112e98e4846dc54.mockapi.io/login`, {
        firstname,
        lastname,
      })
      .then((res) => {
        console.log(res);
        navigate("/Login")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <input
        placeholder="userName"
        onChange={(e) => {
          setfirstname(e.target.value);
        }}
      ></input>
      <input
        placeholder="password"
        onChange={(e) => {
          setlastname(e.target.value);
        }}
      ></input>
      <button onClick={postdata}>Login</button>
    </div>
  );
}
