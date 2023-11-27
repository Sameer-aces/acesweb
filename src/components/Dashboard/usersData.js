import React, { Component, useState } from "react";
import axios from "axios";
import XlsExport from "xlsexport";
const UsersData = () => {
  const [users, setUsers] = useState([]);
  const [team, setTeam] = useState([]);
  const [display, setDisplay] = useState(true);
  const fetchUsers = () => {
    console.log("fetchusers");
    setDisplay(true);
    axios
      .get("http://localhost:5000/api/getUsers")
      .then((res) => setUsers(res.data));
  };

  const fetchTeams = () => {
    console.log("fetchusers");
    setDisplay(false);

    axios
      .get("http://localhost:5000/api/getTeamDetails")
      .then((res) => setTeam(res.data));
  };
  const downloadFile = () => {
    console.log(users, team, display);
    if ((users.length > 0) & display) {
      const dataSample = users.map((user, index) => {
        return {
          name: user.name,
          email: user.email,
          phone: user.phone,
        };
      });

      const xls = new XlsExport(dataSample, "Users");
      xls.exportToXLS();
    } else if ((team.length > 0) & !display) {
      const dataSample = team.map((user, index) => {
        return {
          TeamName: user.teamName,
          teamLeaderName: user.teamLeaderName,
          teamMembers: user.teamMembers,
        };
      });

      const xls = new XlsExport(dataSample, "Team");
      xls.exportToXLS();
    } else {
      alert("Fetch data to download Excel");
    }
  };
  const handleTeam = (index) => {
    console.log(index);
    //open modal on click
    console.log(team[index]);
  };
  return (
    <>
      <button onClick={fetchUsers}>Fetch Users</button>
      <button onClick={fetchTeams}>Fetch Teams</button>
      <button onClick={downloadFile}>Export CSV</button>
      {display ? (
        <table className="headerKeys">
          <thead>
            <tr className="header">
              <th className="Keys">Name</th>
              <th className="Keys">Email</th>
              <th className="Keys">Phone</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr className="Keys" key={user.id}>
                  <td className="Keys">{user.name}</td>
                  <td className="Keys">{user.email}</td>
                  <td className="Keys">{user.phone}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div
          style={{
            overflow: "scroll",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
          }}
        >
          {team.map((user, index) => {
            return (
              <div
                className="box"
                style={{
                  width: "300px",
                  height: "40px",
                  border: "1px solid black",
                }}
                onClick={(e) => handleTeam(index)}
              >
                {user.teamName}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};
export default UsersData;
