import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import API from "../../services/API";
import Spinner from "../../components/Spinner";
import { useSelector } from "react-redux";

const Consumer = () => {
  const { user } = useSelector((state) => state.auth);
  const [hospitalInventoryData, setHospitalInventoryData] = useState([]);

  async function getHospitalInventory() {
    try {
      const { data } = await API.post("/inventory/get-inventory-hospital", {
        filters: {
          inventoryType: "Out",
          hospital: user?._id,
        },
      });
      console.log(data?.inventory);

      if (data?.success) {
        setHospitalInventoryData(data?.inventory);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getHospitalInventory();
  }, [user]);
  return (
    <Layout>
      {hospitalInventoryData.length === 0 ? (
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
            {hospitalInventoryData.map((item, index) => {
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

export default Consumer;
