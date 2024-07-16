import React from "react";
import { useSelector } from "react-redux";
import Spinner from "../components/Spinner";
import Layout from "../components/Layout";

const HomePage = () => {
  const { loading, error } = useSelector((store) => store.auth);
  return (
    <Layout>
      {error && <span>{alert(error)}</span>}
      {loading ? <Spinner /> : <div>HomePage</div>}
    </Layout>
  );
};

export default HomePage;
