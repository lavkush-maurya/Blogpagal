import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import { AuthAxios } from "../axios/AuthAxios";


export default function Register() {
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    let schema = Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().required().email(),
        password: Yup.string().required().min(8).max(24),
        confirm_password: Yup.string().required().min(8).max(24)
    });


    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password: '',
                    confirm_password: ''
                }}
                // onSubmit={values => {
                //     // same shape as initial values
                //     console.log("submit", values);
                //     AuthAxios.post('/register', values)
                //         .then(response => {
                //             // response.data.success ? 'reddirect login logic' : '';
                //             console.log(response);
                //         })
                //         .catch((error) => {
                //             setMessage("Error occurs!"`${error}`);
                //           });
                // }}
                onSubmit={values => {
                    console.log("submit", values);
                    AuthAxios.post('/register', values)
                        .then(response => {
                            console.log(response);
                            if (response.data.success) {
                                alert("user has been registered");
                                navigate('/login');
                            } else {
                                setMessage(response.data.message);
                            }
                        })
                        .catch(data => {
                            // console.log(data.message);
                            alert("user has been registered");
                        });
                }}
                
                validationSchema={schema}
            >

                {
                    ({ errors, touched }) => (
                        <Form className="position-absolute top-50 start-50 translate-middle">
                            <div style={{marginBottom:"2rem"}}>
                                <Field name="name" placeholder="Enter name" />
                                {
                                    errors.name && touched.name ? <p>{errors.name}</p> : ''
                                }
                            </div>
                            <div style={{marginBottom:"2rem"}}>
                                <Field name='email' placeholder="enter email" />
                                {
                                    errors.email ? <p>{errors.email}</p> : ''
                                }
                            </div>
                            <div style={{marginBottom:"2rem"}}>
                                <Field name='password' placeholder="enter password" />
                                {
                                    errors.password ? <p>{errors.password}</p> : ''
                                }
                            </div>
                            <div style={{marginBottom:"2rem"}}>
                                <Field name='confirm_password' placeholder="enter confirm_password" />
                                {
                                    errors.confirm_password ? <p>{errors.confirm_password}</p> : ''
                                }
                            </div>
                            <div style={{marginBottom:"2rem", textAlign:"center"}}>
                                <Button variant="danger" type="submit">SUBMIT</Button>
                            </div>
                            <div>
                                {message}
                            </div>
                        </Form>
                    )
                }
            </Formik>
        </>
    );
}