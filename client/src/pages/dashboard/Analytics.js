import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import API from "../../services/API";
import Spinner from "../../components/Spinner";

const Analytics = () => {
  const [bloodData, setBloodData] = useState([]);
  const [latestInventoryData, setLatestInventoryData] = useState([]);
  const colorArray = [
    "#987070",
    "#74512D",
    "#102C57",
    "#944E63",
    "#607274",
    "#6D2932",
    "#706233",
    "#6C3428",
  ];

  const getBloodGroupData = async () => {
    try {
      const { data } = await API.get("/analytics/blood-group-details");
      // console.log(data?.bloodGroupData);
      setBloodData(data?.bloodGroupData);
    } catch (err) {
      console.log(err);
    }
  };

  async function getLatestInventoryRecords() {
    try {
      const { data } = await API.get("/inventory/get-recent-blood-records");
      setLatestInventoryData(data?.inventory);
      console.log(data?.inventory);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getBloodGroupData();
  }, []);

  useEffect(() => {
    getLatestInventoryRecords();
  }, []);

  return (
    <>
      <Header />
      {bloodData.length !== 0 || latestInventoryData !== 0 ? (
        <div>
          <div className="wrapper">
            {bloodData &&
              bloodData.map((item, index) => (
                <div
                  className="card"
                  key={index}
                  style={{ background: `${colorArray[index]}` }}
                >
                  <h3>Blood Group : {item?.bloodGroup}</h3>
                  <h4>Total In :{item?.totalIn}</h4>
                  <h4>Total Out: {item?.totalOut}</h4>
                  <h4>Total Available : {item?.availableBlood}</h4>
                </div>
              ))}
          </div>

          <h1 style={{ textAlign: "center", marginTop: "30px" }}>
            RECENT THREE RECORDS
          </h1>
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
              {latestInventoryData.map((item, index) => {
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
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Analytics;
