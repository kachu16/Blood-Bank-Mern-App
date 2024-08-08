import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import API from "../../services/API";

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
    </>
  );
};

export default Analytics;
