import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Contact from "./components/Contact";
import Landing from "./components/Landing";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";
import Books from "./components/Books";
import AddBooks from "./components/AddBooks";
import Logout from "./components/Logout";
import axios from "axios";
import EditBook from "./components/EditBook";
import DeleteBook from "./components/DeleteBook";
import "./css/homepage.css";

function App() {
  const [role, setRole] = useState("");

  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("http://localhost:3001/auth/verify")
      .then((res) => {
        if (res.data.login) {
          setRole(res.data.role);
        } else {
          setRole("");
        }
        console.log(res);
      })
      .catch((err) => {
        console.error("Error verifying authentication:", err);
        // Handle error, e.g., setRole('') or show an error message
      });
  }, []);

  return (
    <BrowserRouter>
      <Navbar role={role} />
      <Routes>
        <Route path='/home' element={<Home />}>
          {" "}
        </Route>
        <Route path='/' element={<Landing />}>
          {" "}
        </Route>
        <Route path='/contact' element={<Contact />}>
          {" "}
        </Route>
        <Route path='/bookCollection' element={<Books />}>
          {" "}
        </Route>
        <Route path='/addBooks' element={<AddBooks />}>
          {" "}
        </Route>
        <Route path='/login' element={<Login setRolevar={setRole} />}>
          {" "}
        </Route>
        <Route path='/register' element={<Register setRolevar={setRole} />}>
          {" "}
        </Route>
        <Route path='/dashboard' element={<Dashboard />}>
          {" "}
        </Route>
        <Route path='/book/:id' element={<EditBook />}>
          {" "}
        </Route>
        <Route path='/delete/:id' element={<DeleteBook />}>
          {" "}
        </Route>
        <Route path='/logout' element={<Logout setRole={setRole} />}>
          {" "}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
