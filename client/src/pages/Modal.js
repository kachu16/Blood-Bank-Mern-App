import React, { useState } from "react";
import InputType from "../components/InputType";
import API from "../services/API";
import { useSelector } from "react-redux";

const Modal = ({ setShowModal }) => {
  const user = useSelector((store) => store.auth.user);
  // const org_email = useSelector((store) => store.auth.email);
  const [modalData, setmodalData] = useState({
    inventoryType: "In",
    bloodGroup: "A+",
    quantity: 0,
    email: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setmodalData({ ...modalData, [name]: value });
  }
  async function handleSubmit(e) {
    try {
      e.preventDefault();
      if (!modalData.email || !modalData.quantity || !modalData.bloodGroup) {
        alert("Please fill all the fields");
        return;
      }

      const { data } = await API.post("/inventory/create-inventory", {
        ...modalData,
        organization: user._id,
      });
      console.log(data);

      if (data?.success) {
        alert("An Inventory has been created!");
        window.location.reload();
      } else if (data?.message) {
        alert(data?.message);
        window.location.reload();
      }
    } catch (error) {
      console.log(error?.response?.data?.message);
      window.location.reload();
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
              name="inventoryType"
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
            value={modalData.bloodGroup}
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
            value={modalData.quantity}
          />
          <InputType
            labelText="Enter the Donor Email:"
            labelFor="donoremail"
            inputType="email"
            placeholder="Donar Email"
            name="email"
            value={modalData.email}
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
