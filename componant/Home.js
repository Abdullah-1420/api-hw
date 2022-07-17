import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [patients, setPatients] = useState([]);
  const navigate = useNavigate();

  let config = {
    method: "get",
    url: "http://127.0.0.1:8000/main/all_patients",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  useEffect(() => {
    axios(config)
      .then((res) => {
        setPatients(res.data.Patients);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const AfterDeleteData = () => {
    axios(config)
      .then((res) => {
        setPatients(res.data.Patients);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const Delete = (id) => {
    axios
      .delete(`http://127.0.0.1:8000/main/delete_patient/${id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then(() => {
        AfterDeleteData();
      });
  };

  const logout = () => {
    localStorage.setItem("token", "");
    navigate("/login");
  };

  return (
    <div>
      <button
        onClick={() => {
          logout();
        }}
      >Logout</button>
      <table border={1}>
        <tbody>
          {patients.map((p) => {
            return (
              <tr key={p.id}>
                <td>{p.full_name}</td>
                <td>{p.NationalID}</td>
                <td>{p.birth_date}</td>
                <td>{p.phone}</td>
                <td>
                  <button>Update</button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      Delete(p.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
