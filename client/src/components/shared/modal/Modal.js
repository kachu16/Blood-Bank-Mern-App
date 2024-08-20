import React, { useState } from "react";
import InputType from '../InputType.js';
import API from "../../../services/API.js";
import { useSelector } from "react-redux";

const Modal = () => {
  const [inventoryType, setInventoryType] = useState("In");
  const [bloodGroup, setBloodGroup] = useState("");
  const [email, setEmail] = useState("");
  const [quantity, setQuantity] = useState(0);

  const {user} = useSelector((state) => state.auth);


  const handleSubmit = async () => {
    debugger;
    if(!bloodGroup || !quantity) {
      alert("Please fill all the fields");
      return;
    }

    try {
      const {data} = await API.post('/inventory/create-inventory', {
        email,
        organization: user?._id,
        inventoryType,
        bloodGroup,
        quantity,
   });

   if(data.success) {
     console.log(data);
    alert("New Record Created");
    window.location.reload();
   }

    } catch (error) {
      alert(error.response.data.message);
      console.log(error);
    }


  };
  return (
    <div>
      {/* Modal */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog ">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Manage Blood Record
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="d-flex mb-3">
                Blood Type : &nbsp;
                <div className="form-check ms-3">
                  <input
                    type="radio"
                    className="form-check-input"
                    value={"In"}
                    name="inRadio"
                    onChange={(e)=> setInventoryType(e.target.value)}
                    defaultChecked={inventoryType}
                  />
                  <label htmlFor="In" className="form-check-label">
                    IN
                  </label>
                </div>
                <div className="form-check ms-3">
                  <input
                    type="radio"
                    className="form-check-input"
                    value={"Out"}
                    name="inRadio"
                    onChange={(e)=> setInventoryType(e.target.value)}
                    
                  />
                  <label htmlFor="Out" className="form-check-label">
                    OUT
                  </label>
                </div>
              </div>
              <select
                className="form-select"
                aria-label="Default select example"
                value={bloodGroup}
                onChange={(e) => setBloodGroup(e.target.value)}
              >
                <option defaultValue={"Open this select menu"}>
                  Select Blood Group
                </option>
                <option value={"O+"}>O+</option>
                <option value={"O-"}>O-</option>
                <option value={"AB+"}>AB+</option>
                <option value={"AB-"}>AB-</option>
                <option value={"A+"}>A+</option>
                <option value={"A-"}>A-</option>
                <option value={"B+"}>B+</option>
                <option value={"B-"}>B-</option>
              </select>
            <InputType
                labelText={"Donar Email"}
                labelFor={"donarEmail"}
                inputType={"Donar Email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={'donarEmail'}
        
              />
            <InputType
                labelText={"Quantity(ml)"}
                labelFor={"quantity"}
                inputType={"Number"}
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
               
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
