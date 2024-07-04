import React from "react";
import Form from "../../components/shared/Form";
import { useSelector } from "react-redux";
import Loader from "../../components/shared/Loader";

const Register = () => {
  const { loading, error } = useSelector((state) => state.auth);

  return (
    <>
    {error && <span>{alert(error)}</span>}
      {loading ? (
        <Loader />
      ) : (
        <div className="form">
          <div className="form-box">
            <Form
              submitBtn="Register"
              formType="register"
              mainHeading="Create your account"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
