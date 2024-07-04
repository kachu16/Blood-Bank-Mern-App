import React from "react";
import Loader from "../components/shared/Loader";
import Layout from "../components/Layout/Layout";
import { useSelector } from "react-redux";

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
            <h1>HomePage</h1>
          </>
        )}
      </Layout>
    </>
  );
};

export default HomePage;
