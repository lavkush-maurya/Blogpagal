import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Main from "./Main";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Blog from "./components/link/Blog";
import Contact from "./components/link/Contact";
import About from "./components/link/About";
import Login from "./auth/Login";
import SingleBlog from "./components/link/SingleBlog";
import Register from "./auth/Register";

function App() {
  return (
    <div className="App">
      <Header />
      
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path={"/blog/:Id"} element={<SingleBlog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </div>
  );
}

export default App;
