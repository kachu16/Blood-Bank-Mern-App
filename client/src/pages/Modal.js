import React, { useState } from "react";
import InputType from "../components/InputType";
import API from "../services/API";

const Modal = ({ setShowModal }) => {
  const [formData, setFormData] = useState({
    inventoryType: "In",
    bloodGroup: "A+",
    quantity: 0,
    email: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    console.log(e);
    setFormData({ ...formData, [name]: value });
  }
  async function handleSubmit(e) {
    try {
      e.preventDefault();
      console.log(formData);
      const res = await API.post("/create-inventory", { formData });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
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
        {/* form */}
        <form style={{ paddingTop: "20px" }} onSubmit={handleSubmit}>
          <p>
            Inventory Type:
            <input
              id="typeIn"
              type="radio"
              value="In"
              name="itype"
              onChange={handleChange}
              defaultChecked
            />
            <label htmlFor="typeIn">In</label>
            <input
              id="typeOut"
              type="radio"
              value="Out"
              name="inventoryType"
              onChange={handleChange}
            />
            <label htmlFor="typeOut">Out</label>
          </p>

          <p>Blood Group:</p>
          <select
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
          >
            <option value="A+">A+</option>
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
            onChange={handleChange}
            value={formData.quantity}
          />
          <InputType
            labelText="Enter the Donor Email:"
            labelFor="donoremail"
            inputType="email"
            placeholder="Donar Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
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
