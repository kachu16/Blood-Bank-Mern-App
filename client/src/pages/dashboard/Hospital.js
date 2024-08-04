import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import API from "../../services/API";
const Hospital = () => {
  const [hospitalData, setHospitalData] = useState([]);
  async function getHospital() {
    try {
      const { data } = await API.get("/inventory/hospital-records");
      // console.log(data);
      if (data?.success) {
        setHospitalData(data?.hospitals);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getHospital();
  }, []);
  return (
    <Layout>
      {!hospitalData ? (
        <h2>No data is present</h2>
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
            {hospitalData.map((item, index) => {
              return (
                <tr key={item?._id}>
                  <td>{1 + index}</td>
                  <td>{item?.role}</td>
                  <td>
                    {item?.hospitalName || item?.organizationName + "(ORG)"}
                  </td>
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
