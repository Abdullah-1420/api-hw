import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Update() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [id , setId] = useState(null);
  const navigate = useNavigate()

  useEffect (()=>{
    setId(localStorage.getItem('id'))
    setFirstName(localStorage.getItem('firstname'))
    setLastName(localStorage.getItem('lastname'))
},[])

  const updateData = () => {

    axios
      .put(`https://62d3e3935112e98e4846dc54.mockapi.io/endp/${id}`, {
        firstname,
        lastname
      })
      .then((res) => {
        console.log("data");
        console.log(res);
        navigate("/A")
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <input
        placeholder="firstname"
        onChange={(e) => {
          setFirstName(e.target.value); 
        }}
      ></input>
      <input
        placeholder="lastname"
        onChange={(e) => {
            setLastName(e.target.value);
        }}
      ></input>
      <button onClick={updateData}>Update</button>
    </div>
  );
}
