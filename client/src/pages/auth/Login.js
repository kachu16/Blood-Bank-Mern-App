import React from "react";
import Form from "../../components/Form";
import { useSelector } from "react-redux";
import Spinner from "../../components/Spinner";

const Login = () => {
  const loading = useSelector((store) => store.auth.loading);
  const error = useSelector((store) => store.auth.error);

  // console.log(loading, error);

  return (
    <>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
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
