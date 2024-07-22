import React from "react";
import Loader from "../components/shared/Loader";
import Layout from "../components/Layout/Layout";
import { useSelector } from "react-redux";
import { IoMdAdd } from "react-icons/io";
import Modal from "../components/shared/modal/Modal";

const HomePage = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <>
      <Layout>
        {error && <span>{alert(error)}</span>}
        {loading ? (
          <Loader />
        ) : (
          <>
            <h1
              className="flex gap-1 items-center p-2 cursor-pointer hover:text-red-600"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              <IoMdAdd />
              Add Inventory
            </h1>
            <Modal />
          </>
        )}
      </Layout>
    </>
  );
};

export default HomePage;
