import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';

const Contact = () => {

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Name is too short!')
      .max(30, 'Name is too long!')
      .required('Name is required!'),
    email: Yup.string()
      .email('Invalid email!')
      .required('Email is required!'),
    message: Yup.string()
      .min(10, 'Message is too short!')
      .max(500, 'Message is too long!')
      .required('Message is required!')
  });



  return (
    <>
    <Container>
      <h1 style={{textAlign:"center", marginTop:"3rem"}}>Contact Us</h1>
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          // Submit logic goes here
          console.log(values);
          resetForm();
          setSubmitting(false);
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} isInvalid={touched.name && errors.name} />
              <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} isInvalid={touched.email && errors.email} />
              <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Enter your message" name="message" value={values.message} onChange={handleChange} onBlur={handleBlur} isInvalid={touched.message && errors.message} />
              <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
            </Form.Group>

            <Button variant="success" type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
    </>
  );
};

export default Contact;
