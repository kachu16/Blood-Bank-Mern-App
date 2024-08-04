import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import API from "../../services/API";
const Hospital = () => {
  const [organizationData, setOrganizationData] = useState([]);
  async function getOrganization() {
    try {
      const { data } = await API.get("/inventory/organization-records");
      // console.log(data);
      if (data?.success) {
        setOrganizationData(data?.organizations);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getOrganization();
  }, []);
  return (
    <Layout>
      {!organizationData ? (
        <h2>No Organization data is present</h2>
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
            {organizationData.map((item, index) => {
              return (
                <tr key={item?._id}>
                  <td>{1 + index}</td>
                  <td>{item?.role}</td>
                  <td>{item?.organizationName}</td>
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

export default Hospital;
