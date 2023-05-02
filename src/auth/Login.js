import React, { useState } from "react";
import { AuthAxios } from "../axios/AuthAxios";
import * as Yup from 'yup'
import { Formik, Form, Field } from "formik";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  let loginSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });

  return (
    <div style={{ textAlign: "-webkit-center" }}>
      <h1>Login</h1>
      <Formik
        onSubmit={(values) => {
          console.log(values);
          AuthAxios.post("/login", values)
            .then((response) => {
              console.log(response.data.data.token);
              if (response.data.success) {
                localStorage.setItem(
                  "token",
                  "Bearer " + response.data.data.token
                );
                navigate('/contact');
              }
            })
            .catch((error) => {
              setMessage("Check your credentials please!"`${error}`);
            });
        }}
        validationSchema={loginSchema}
        initialValues={{
          email: "",
          password: "",
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <Field type="email" name="email" placeholder="Email" />
              <div>
                {errors.email && touched.email ? <p>{errors.email}</p> : null}
              </div>
            </div>
            <div>
              <Field type="password" name="password" placeholder="Password" />
              <div>
                {errors.password && touched.password ? (
                  <p>{errors.password}</p>
                ) : null}
              </div>
            </div>
            <input type="submit" value="Login "/>
          </Form>
        )}
      </Formik>
      <div>
        <hr/>
        <b>To check the login. Please type this email & password given Below and wait for 10 sec if you automatic navigate to contact us page then this login will happens </b><br/>
        <b style={{color:"red"}}>Note: this login will happens with api so it will take time to initialize the data from the API data server</b>
        <br/>
        <p>email: demo@email.com</p>
        <p>Password: 123456789</p>
      </div>
      <div>
        <Link to={"/register"} >Register Here...</Link>
      </div>
      <div>{message}</div>
    </div>
  );
};

export default Login;
