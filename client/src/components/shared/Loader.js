import React from 'react';
import { useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";

const override = {
    position: "absolute",
    // margin: "0 auto",
    top:"50%",
    left:"50%"
    // borderColor: "red",
  };

const Loader = () => {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");
  
    return (
      <div className="sweet-loading" style={{position:"absolute",zIndex:"9",background:"black",height:'100vh',width:"100%",opacity:"0.5"}}>
        {/* <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
        <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" /> */}
  
        <BeatLoader
          color={color}
          loading={loading}
          cssOverride={override}
          size={15}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
}

export default Loader