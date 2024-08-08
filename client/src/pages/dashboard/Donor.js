import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import API from "../../services/API";
import Spinner from "../../components/Spinner";

const Donor = () => {
  const [donorData, setDonorData] = useState([]);
  async function getDonorRecords() {
    try {
      const { data } = await API.get("/inventory/donor-records");
      // console.log(data?.donors);
      if (data?.success) {
        setDonorData(data?.donors);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getDonorRecords();
  }, []);
  return (
    <Layout>
      {donorData.length === 0 ? (
        <Spinner />
      ) : (
        <table style={{ margin: "20px" }}>
          <thead>
            <tr>
              <th>S. No.</th>
              <th>Role</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {donorData.map((item, index) => {
              return (
                <tr key={item?._id}>
                  <td>{1 + index}</td>
                  <td>{item?.role}</td>
                  <td>{item?.name || item?.organizationName + "(ORG)"}</td>
                  <td>{item?.phone}</td>
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

export default Donor;
