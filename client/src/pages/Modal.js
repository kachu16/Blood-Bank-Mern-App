import React from "react";
import InputType from "../components/InputType";

const Modal = ({ setShowModal }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button
          style={{
            position: "absolute",
            top: "10px",
            right: "16px",
            fontSize: "20px",
            fontWeight: "bold",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => setShowModal(false)}
        >
          X
        </button>
        <form style={{ paddingTop: "20px" }}>
          <p>
            Inventory Type:
            <input id="typeIn" type="radio" value="In" name="itype" />
            <label htmlFor="typeIn">In</label>
            <input id="typeOut" type="radio" value="Out" name="itype" />
            <label htmlFor="typeOut">Out</label>
          </p>

          <p>Blood Group:</p>
          <select name="bloodGroup">
            <option value="A+">A-</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>

          <InputType
            labelText="Enter the Quantity:"
            labelFor="quantity"
            inputType="number"
            placeholder="Quantity"
            name="quantity"
          />
          <InputType
            labelText="Enter the Donor Email:"
            labelFor="donoremail"
            inputType="email"
            placeholder="Donar Email"
            name="donoremail"
          />
          <div>
            <button type="submit" className="modalbutton">
              Submit
            </button>
            <button
              className="modalbutton closebutton"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
