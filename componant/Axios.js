import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, link } from "react-router-dom";
export default function Axios() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://62d3e3935112e98e4846dc54.mockapi.io/login")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //\update
  const setUpdate = (d) => {
    console.log("******")
    console.log(d)
    let { id, firstname, lastname } = d;
    localStorage.setItem("id", id);
    localStorage.setItem("firstname", firstname);
    localStorage.setItem("lastname", lastname);

  };
  const AfterDeleteData = () => {
    axios
      .get(`https://62d3e3935112e98e4846dc54.mockapi.io/endp`)
      .then((AfterDeleteData) => {
        setData(AfterDeleteData.data);
      });
  };
  const Delete = (id) => {
    axios
      .delete(`https://62d3e3935112e98e4846dc54.mockapi.io/endp/${id}`)
      .then(() => {
        AfterDeleteData();
      });
  };

  return (
    <div>
      Axios
      <ul>
        {data.map((d) => {
          return (
            <>
              <li>
                {d.id} - {d.firstname} {d.lastname}
              </li>
              <Link to={"/Update"}>
                <button
                  onClick={
                    setUpdate(d)
                  }
                >
                  Update
                </button>
              </Link>
              <button
                onClick={() => {
                  Delete(d.id);
                }}
              >
                Delete
              </button>
            </>
          );
        })}
      </ul>
    </div>
  );
}
