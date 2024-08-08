import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Spinner from "../../components/Spinner";
import API from "../../services/API";

const OrganizationList = () => {
  const [organizationListData, setOrganizationListData] = useState([]);

  async function getOrganizationList() {
    const { data } = await API.get("/admin/getOrganizationList");
    // console.log(data);
    setOrganizationListData(data?.organizationList);
  }

  useEffect(() => {
    getOrganizationList();
  }, []);

  // DELETE ORGANIZATION
  const handleDeleteOrganization = async (id) => {
    try {
      let answer = window.confirm(
        "Are you sure you want to delete the Organization??"
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
      {organizationListData.length === 0 ? (
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
            {organizationListData.map((item, index) => {
              return (
                <tr key={item?._id}>
                  <td>{1 + index}</td>
                  <td>{item?.role}</td>
                  <td>{item?.organizationName}</td>
                  <td>{item?.phone}</td>
                  <td>{item?.email}</td>
                  <td
                    className="dlt-btn"
                    onClick={() => handleDeleteOrganization(item?._id)}
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

export default OrganizationList;
