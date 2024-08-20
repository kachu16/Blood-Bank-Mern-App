import React, { useEffect, useState } from "react";
import Loader from "../components/shared/Loader";
import Layout from "../components/Layout/Layout";
import { useSelector } from "react-redux";
import { IoMdAdd } from "react-icons/io";
import Modal from "../components/shared/modal/Modal";
import API from "../services/API";
import { formatDate } from "../components/shared/utils";

const HomePage = () => {
  const { loading, error } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);

  const getInventory = async () => {
    try {
      const {data} = await API.get("/inventory/get-inventory");
      console.log(data);
      setData(data);
     
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getInventory();
  }, []);


  // const formatDate = (dateString) => {
  //   const options = { year: 'numeric', month: 'long', day: 'numeric' };
  //   const date = new Date(dateString);
  //   return date.toLocaleDateString(undefined, options);
  // };

  return (
    <>
      <Layout>
        {error && <span>{alert(error)}</span>}
        {loading ? (
          <Loader />
        ) : (
          <>
            <h1
              className="flex gap-1 items-center p-2 cursor-pointer hover:text-red-600 text-xl"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              <IoMdAdd />
              Add Inventory
            </h1>
            <br/>
            {/* table  */}

            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Blood Group</th>
                  <th scope="col">Inventory Type</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Donar Email</th>
                  <th scope="col">Time And Date</th>
                </tr>
              </thead>
              <tbody>
                {data && data?.inventory?.map((data)=>(
                <tr key={data._id}>
                  <td scope="row">{data.bloodGroup}</td>
                  <td>{data.inventoryType}</td>
                  <td>{data.quantity}</td>
                  <td>{data.email}</td>
                  <td>{formatDate(data.updatedAt)}</td>
                  
                </tr>

                ))
                }
                
              </tbody>
            </table>
            <Modal />
          </>
        )}
      </Layout>
    </>
  );
};

export default HomePage;
