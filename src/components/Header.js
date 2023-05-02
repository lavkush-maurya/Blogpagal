import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthAxios } from "../axios/AuthAxios";

const Header = () => {
  // ---------------------login information
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  const getUserDetails = () => {
    AuthAxios.get("/user")
      .then((reponse) => {
        setUser(reponse.data);
      })
      .catch((err) => {
        setUser({});
      });
  };

  useEffect(() => {
    if (!localStorage.getItem("token") /*&& location !== "/login"*/) {
      navigate("/");
    }
    getUserDetails();
  }, [/*location*/]);

  // ----------------------------dark mode code
  const [darkMode, setDarkMode] = useState(false);

  React.useEffect(() => {
    const json = localStorage.getItem("site-dark-mode");
    const currentMode = JSON.parse(json);
    if (currentMode) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  React.useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    const json = JSON.stringify(darkMode);
    localStorage.setItem("site-dark-mode", json);
  }, [darkMode]);
  // ------------------------ dark mode code end
  return (
    <>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand>
            <NavLink to={"/"} className="nav-link active" aria-current="page">
              <h3>{user.name}</h3>
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink to={"/"} className="nav-link active" aria-current="page">
                Home
              </NavLink>
              <NavLink
                to={"/about"}
                className="nav-link active"
                aria-current="page"
              >
                About
              </NavLink>
              <NavLink
                to={"/contact"}
                className="nav-link active"
                aria-current="page"
              >
                Contact
              </NavLink>
              <NavLink
                to={"/blogs"}
                className="nav-link active"
                aria-current="page"
              >
                Blogs
              </NavLink>
            </Nav>
            <Nav>
              {!!!localStorage.getItem("token") ? (
                <NavLink
                  to={"/login"}
                  className="nav-link active"
                  aria-current="page"
                >
                  Login
                </NavLink>
              ) : (
                <Button
                  variant="danger"
                  onClick={handleLogout}
                  className="mx-1"
                >
                  LOGOUT
                </Button>
              )}

              <div className="toggle-switch">
                <label className="label1">
                  <input
                    className="input1"
                    type="checkbox"
                    onClick={() => setDarkMode(!darkMode)}
                  />
                  <span className="slider" />
                </label>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
