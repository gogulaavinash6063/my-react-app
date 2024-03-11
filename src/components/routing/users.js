
import React, { useEffect, useState } from "react";
import NavbarB from "../header/header";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [originalUsers, setOriginalUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users")
      .then(response => {
        setUsers(response.data);
        setOriginalUsers(response.data);
      });
  }, []);

  const handleClick = (event) => {
    event.preventDefault();

    if (search.length > 2) {
      const filteredUsers = originalUsers.filter((user) =>
        user.fullName.toLowerCase().includes(search.toLowerCase())
      );
      setUsers(filteredUsers);
    } else {
      setUsers(originalUsers);
      alert("Enter more than two characters");
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setSearch(event.target.value);

    // Reset users state to originalUsers when search input is updated
    setUsers(originalUsers);
  };

  return (
    <>
      <NavbarB />
      <div className="container mt-4">
        <h1 style={{ fontStyle: "oblique" }}>Users.....</h1>
        <form onSubmit={handleClick} className="mb-3">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter two or more characters to Search Users...."
              value={search}
              onChange={handleSearch}
            />
            <div className="input-group-append">
              <button
                type="submit"
                className="btn btn-success"
                style={{ borderRadius: "8%" }}
              >
                Search
              </button>
            </div>
          </div>
        </form>
        <table className="table table-bordered" style={{border:"2px solid blue"}}>
          <thead>
            <tr>
              <th style={{backgroundColor:"aqua"}}>ID</th>
              <th style={{backgroundColor:"aqua"}}>User Avatar</th>
              <th style={{backgroundColor:"aqua"}}>Full Name</th>
              <th style={{backgroundColor:"aqua"}}>DOB</th>
              <th style={{backgroundColor:"aqua"}}>Gender</th>
              <th style={{backgroundColor:"aqua"}}>Current Location</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                  <img
                    src={item.profilePic}
                    alt={`Avatar of ${item.fullName}`}
                    style={{ maxWidth: "50px", maxHeight: "50px" }}
                  />
                </td>
                <td>{item.fullName}</td>
                <td>{item.dob}</td>
                <td>{item.gender}</td>
                <td>{item.currentCity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Users;
