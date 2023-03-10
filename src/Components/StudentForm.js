import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { Button, FormGroup } from "react-bootstrap";
import * as Yup from "yup";
  
const StudentForm = (props) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string()
      .email("You have enter an invalid email address")
      .required("Required"),
    rollno: Yup.number()
      .positive("Invalid roll number")
      .integer("Invalid roll number")
      .required("Required"),
  });
  console.log(props);
  return (
    <div className="form-wrapper">
      <Formik {...props} validationSchema={validationSchema}>
        <Form>
          <FormGroup>
            <label>Name</label>
            <Field name="name" type="text" 
                className="form-control" />
            <ErrorMessage
              name="name"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
          <label>Email</label>
            <Field name="email" type="text" 
                className="form-control" />
            <ErrorMessage
              name="email"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
          <label>Rollno</label>
            <Field name="rollno" type="number" 
                className="form-control" />
            <ErrorMessage
              name="rollno"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <br/>
          <Button variant="danger" size="lg" 
            block="block" type="submit" className="form-control">
            {props.children}
          </Button>
        </Form>
      </Formik>
    </div>
  );
};
  
export default StudentForm;