import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Spinner from "../components/Spinner";
import Layout from "../components/Layout";
import Modal from "./Modal";
import API from "../services/API";

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const { loading, error } = useSelector((store) => store.auth);
  const [inventories, setInventories] = useState([]);

  async function getInventoryRecords() {
    try {
      const { data } = await API.get("/inventory/get-inventory");
      setInventories(data?.inventory);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getInventoryRecords();
  }, [inventories]);

  return (
    <Layout>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div className="add-inventory">
          <button
            style={{ margin: "30px" }}
            className="modalbutton"
            onClick={() => setShowModal(!showModal)}
          >
            + {!showModal ? "Add" : "Remove"} Inventory
          </button>
        </div>
      )}

      {showModal && <Modal setShowModal={setShowModal} />}
      {inventories.length === 0 ? (
        <h2 style={{ margin: "30px", color: "red" }}>
          No Inventory Present, Please create a Inventory
        </h2>
      ) : (
        <div className="inventory-container">
          <table>
            <thead>
              <tr>
                <th>Email</th>
                <th>Inventory Type</th>
                <th>Blood Group</th>
                <th>Quantity</th>
                <th>Created On</th>
              </tr>
            </thead>
            <tbody>
              {inventories.map((item, index) => {
                const date = new Date(item?.createdAt);
                const options = {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                  hour12: false, // Set to true for 12-hour format
                };
                const formattedDate = date.toLocaleString(undefined, options);
                return (
                  <tr key={index}>
                    <th>{item?.email}</th>
                    <th>{item?.inventoryType}</th>
                    <th>{item?.bloodGroup}</th>
                    <th>{item?.quantity}</th>
                    <th>{formattedDate}</th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </Layout>
  );
};

export default HomePage;
