import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Spinner from "../../components/Spinner";
import API from "../../services/API";

const HospitalList = () => {
  const [hospitalListData, setHospitalListData] = useState([]);

  async function getHospitalList() {
    const { data } = await API.get("/admin/getHospitalList");
    // console.log(data);
    setHospitalListData(data?.hospitalList);
  }

  useEffect(() => {
    getHospitalList();
  }, []);

  // DELETE HOSPITAL
  const handleDeleteHospital = async (id) => {
    try {
      let answer = window.confirm(
        "Are you sure you want to delete the Hospital?"
      );
      if (!answer) return;
      const { data } = API.delete(`/admin/deleteRecord/${id}`);
      console.log(data);
      alert(data?.message);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      {hospitalListData.length === 0 ? (
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {hospitalListData.map((item, index) => {
              return (
                <tr key={item?._id}>
                  <td>{1 + index}</td>
                  <td>{item?.role}</td>
                  <td>{item?.hospitalName}</td>
                  <td>{item?.phone}</td>
                  <td>{item?.email}</td>
                  <td
                    className="dlt-btn"
                    onClick={() => handleDeleteHospital(item?._id)}
                  >
                    Delete
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </Layout>
  );
};

export default HospitalList;
