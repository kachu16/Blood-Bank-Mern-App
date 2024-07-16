import React from "react";
import Form from "../../components/Form";

const Register = () => {
  return (
    <div className="form">
      <div className="form-box">
        <Form
          submitBtn="Register"
          formType="register"
          mainHeading="Create your account"
        />
      </div>
    </div>
  );
};

export default Register;
