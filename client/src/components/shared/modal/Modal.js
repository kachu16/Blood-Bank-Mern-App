import React, { useState } from "react";
import InputType from '../InputType';

const Modal = () => {
  const [inventoryType, setInventoryType] = useState("in");
  const [bloodType, setBloodType] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [quantity, setQuantity] = useState(0);
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
        <div className="modal-dialog">
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
                    value={"in"}
                    name="inRadio"
                    onChange={(e)=> setInventoryType(e.target.value)}
                    defaultChecked
                  />
                  <label htmlFor="in" className="form-check-label">
                    IN
                  </label>
                </div>
                <div className="form-check ms-3">
                  <input
                    type="radio"
                    className="form-check-input"
                    value={"out"}
                    name="inRadio"
                    onChange={(e)=> setInventoryType(e.target.value)}
                    defaultChecked
                  />
                  <label htmlFor="out" className="form-check-label">
                    OUT
                  </label>
                </div>
              </div>
              <select
                className="form-select"
                aria-label="Default select example"
                value={bloodType}
              >
                <option defaultValue={"Open this select menu"}>
                  Open this select menu
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
            </div>
            <InputType
                labelText={"Donar Email"}
                labelFor={"donarEmail"}
                inputType={"donarEmail"}
                value={donorEmail}
                onChange={(e) => setDonorEmail(e.target.value)}
              />
            <InputType
                labelText={"quantity"}
                labelFor={"quantity"}
                inputType={"quantity"}
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
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
