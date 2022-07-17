import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const postdata = () => {
    axios
      .post(`http://127.0.0.1:8000/auth/login/`, {
        username,
        password,
      })
      .then((res) => {
        if(res.status == 200){
            localStorage.setItem("token" , res.data.token)
            navigate("/Home")
        }
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
          setUsername(e.target.value);
        }}
      ></input>
      <input
        placeholder="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      ></input>
      <button onClick={postdata}>Login</button>
    </div>
  );
}
