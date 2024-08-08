import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import API from "../../services/API";
import { useSelector } from "react-redux";
import Spinner from "../../components/Spinner";

const Donation = () => {
  const { user } = useSelector((state) => state.auth);

  const [donorInventoryData, setDonorInventoryData] = useState([]);
  async function getDonorInventory() {
    try {
      const { data } = await API.post("/inventory/get-inventory-hospital", {
        filters: {
          inventoryType: "In",
          donor: user?._id,
        },
      });
      console.log(data?.inventory);

      if (data?.success) {
        setDonorInventoryData(data?.inventory);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getDonorInventory();
  }, []);
  return (
    <Layout>
      {donorInventoryData.length === 0 ? (
        <Spinner />
      ) : (
        <table style={{ margin: "20px" }}>
          <thead>
            <tr>
              <th>S. No.</th>
              <th>Blood Group</th>
              <th>Quantity</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {donorInventoryData.map((item, index) => {
              return (
                <tr key={item?._id}>
                  <td>{1 + index}</td>
                  <td>{item?.bloodGroup}</td>
                  <td>{item?.quantity}</td>
                  <td>{item?.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </Layout>
  );
};

export default Donation;
