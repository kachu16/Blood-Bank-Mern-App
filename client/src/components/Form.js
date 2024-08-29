import React, { useState } from "react";
import InputType from "./InputType";
import { handleLogin, handleRegister } from "../services/authService";
import { Link } from "react-router-dom";

const Form = ({ submitBtn, formType, mainHeading }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "Donor",
    name: "",
    organizationName: "",
    hospitalName: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const [errors, setErrors] = useState({});

  // const validateForm = () => {
  //   const newErrors = {};
  //   // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  //   if (!formData.email) {
  //     newErrors.email = "Email is required";
  //   } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
  //     newErrors.email = "Email Address is invalid";
  //   }

  //   if (!formData.password) {
  //     newErrors.password = "Password is required";
  //   }
  //   // } else if (!passwordRegex.test(formData.password)) {
  //   //     newErrors.password = "Password must contain at least 8 characters, including an uppercase letter, a lowercase letter, a digit, and a special character.";
  //   // }

  //   if (formType === "register") {
  //     if (
  //       !formData.name &&
  //       (formData.role === "Donor" || formData.role === "Admin")
  //     ) {
  //       newErrors.name = "Name is required";
  //     } else if (formData.name.length < 6) {
  //       newErrors.name = "Name must be at least 6 characters long";
  //     }

  //     if (!formData.organizationName && formData.role === "Organization") {
  //       newErrors.organizationName = "Organization Name is required";
  //     }
  //     if (!formData.hospitalName && formData.role === "Hospital") {
  //       newErrors.hospitalName = "Hospital Name is required";
  //     }
  //     if (!formData.phone) {
  //       newErrors.phone = "Phone is required";
  //     } else if (!/^\d{10}$/.test(formData.phone)) {
  //       newErrors.phone = "Phone number is invalid";
  //     }
  //   }

  //   setErrors(newErrors);
  //   return Object.keys(newErrors).length === 0;
  // };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
            if (formType === "login")
              return handleLogin(
                e,
                formData.role,
                formData.email,
                formData.password
              );
            else if (formType === "register")
              return handleRegister(
                e,
                formData.role,
                formData.email,
                formData.password,
                formData.name,
                formData.organizationName,
                formData.hospitalName,
                formData.phone
              );
        }}
      >
        <h1>{mainHeading}</h1>

        <div className="radio-box">
          <div>
            <input
              id="donorRadio"
              type="radio"
              value="Donor"
              name="role"
              onChange={handleChange}
              defaultChecked
            />
            <label htmlFor="donorRadio">Donor</label>
          </div>
          <div>
            <input
              id="adminRadio"
              type="radio"
              value="Admin"
              name="role"
              onChange={handleChange}
            />
            <label htmlFor="adminRadio">Admin</label>
          </div>
          <div>
            <input
              id="hospitalRadio"
              type="radio"
              value="Hospital"
              name="role"
              onChange={handleChange}
            />
            <label htmlFor="hospitalRadio">Hospital</label>
          </div>
          <div>
            <input
              id="orgRadio"
              type="radio"
              value="Organization"
              name="role"
              onChange={handleChange}
            />
            <label htmlFor="orgRadio">Organization</label>
          </div>
        </div>

        {/* Switch statement */}
        {(() => {
          switch (true) {
            case formType === "login": {
              return (
                <>
                  <InputType
                    labelText="Enter the Email"
                    labelFor="email"
                    inputType="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {/* {errors.email && <p className="error">{errors.email}</p>} */}
                  <InputType
                    labelText="Enter the password"
                    labelFor="password"
                    inputType="password"
                    placeholder="Pasword"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  {/* {errors.password && (
                    <p className="error">{errors.password}</p>
                  )} */}
                </>
              );
            }

            case formType === "register": {
              return (
                <>
                  {formData.role === "Donor" || formData.role === "Admin" ? (
                    <>
                      <InputType
                        labelText="Enter the Name"
                        labelFor="name"
                        inputType="text"
                        placeholder="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      {/* {errors.name && <p className="error">{errors.name}</p>} */}
                    </>
                  ) : formData.role === "Organization" ? (
                    <>
                      <InputType
                        labelText="Enter the Organization Name"
                        labelFor="organization"
                        inputType="text"
                        placeholder="Organization"
                        name="organizationName"
                        value={formData.organizationName}
                        onChange={handleChange}
                      />
                      {/* {errors.organizationName && (
                        <p className="error">{errors.organizationName}</p>
                      )} */}
                    </>
                  ) : formData.role === "Hospital" ? (
                    <>
                      <InputType
                        labelText="Enter the Hospital Name"
                        labelFor="hospital"
                        inputType="text"
                        placeholder="Hospital"
                        name="hospitalName"
                        value={formData.hospitalName}
                        onChange={handleChange}
                      />
                      {/* {errors.hospitalName && (
                        <p className="error">{errors.hospitalName}</p>
                      )} */}
                    </>
                  ) : null}

                  <InputType
                    labelText="Enter the Email"
                    labelFor="email"
                    inputType="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {/* {errors.email && <p className="error">{errors.email}</p>} */}
                  <InputType
                    labelText="Enter the password"
                    labelFor="password"
                    inputType="password"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  {/* {errors.password && (
                    <p className="error">{errors.password}</p>
                  )} */}
                  <InputType
                    labelText="Enter the Phone"
                    labelFor="phone"
                    inputType="text"
                    placeholder="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {/* {errors.phone && <p className="error">{errors.phone}</p>} */}
                </>
              );
            }
            
            default : {
              return null;
            }
          }
        })()}

        <button type="submit">{submitBtn}</button>

        {formType === "register" ? (
          <p className="last-para">
            Already have an account? <Link to="/login">SignIn</Link>{" "}
          </p>
        ) : formType === "login" ? (
          <p className="last-para">
            Don't have an account? <Link to="/register">Signup</Link>
          </p>
        ) : null}
      </form>
    </div>
  );
};

export default Form;
