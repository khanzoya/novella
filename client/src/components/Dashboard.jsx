import React, { useEffect, useState } from "react";
import "../css/Dashboard.css";
import axios from "axios";

const Dashboard = () => {
  const [user, setUser] = useState(0);
  const [admin, setAdmin] = useState(0);
  const [books, setBooks] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:3001/dashboard")
      .then((res) => {
        if (res.data.ok) {
          setUser(res.data.user);
          setAdmin(res.data.admin);
          setBooks(res.data.books);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div className='dashboard'>
        <div className='dashboard-box'>
          <h2>Total Books</h2>
          <br />
          <h2>{books}</h2>
        </div>
        <div className='dashboard-box'>
          <h2>Total Users</h2>
          <br />
          <h2>{user}</h2>
        </div>
        <div className='dashboard-box'>
          <h2>Total Admins</h2>
          <br />
          <h2>{admin}</h2>
        </div>
      </div>
      {/* <img src='images/bookreadin.avif' alt='Book Reading' /> */}
    </div>
  );
};

export default Dashboard;
