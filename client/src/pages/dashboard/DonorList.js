import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Spinner from "../../components/Spinner";
import API from "../../services/API";

const DonorList = () => {
  const [donorListData, setDonorListData] = useState([]);

  async function getDonorList() {
    const { data } = await API.get("/admin/getDonorList");
    // console.log(data);
    setDonorListData(data?.donorList);
  }

  useEffect(() => {
    getDonorList();
  }, []);

  // DELETE DONOR
  const handleDeleteDonor = async (id) => {
    try {
      let answer = window.confirm("Are you sure you want to delete the Donor?");
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
      {donorListData.length === 0 ? (
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
            {donorListData.map((item, index) => {
              return (
                <tr key={item?._id}>
                  <td>{1 + index}</td>
                  <td>{item?.role}</td>
                  <td>{item?.name}</td>
                  <td>{item?.phone}</td>
                  <td>{item?.email}</td>
                  <td
                    className="dlt-btn"
                    onClick={() => handleDeleteDonor(item?._id)}
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

export default DonorList;
