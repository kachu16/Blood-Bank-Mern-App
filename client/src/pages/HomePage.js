import React, { useState } from "react";
import { useSelector } from "react-redux";
import Spinner from "../components/Spinner";
import Layout from "../components/Layout";
import InputType from "../components/InputType";
import Modal from "./Modal";

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const { loading, error } = useSelector((store) => store.auth);
  return (
    <Layout>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div className="add-inventory">
          <button onClick={() => setShowModal(!showModal)}>
            + {!showModal ? "Add" : "Remove"} Inventory
          </button>
        </div>
      )}

      {showModal && <Modal setShowModal={setShowModal} />}
    </Layout>
  );
};

export default HomePage;
