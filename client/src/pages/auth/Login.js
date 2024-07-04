import React from "react";
import Form from "../../components/shared/Form";
import Loader from "../../components/shared/Loader";
import { useSelector } from "react-redux";

const Login = () => {
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
              submitBtn="Login"
              formType="login"
              mainHeading="Welcome back"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
