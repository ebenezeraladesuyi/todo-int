// import React from "react";

import { 
    // Hearts,
    // LineWave,
    FallingLines
  } from "react-loader-spinner";
import iStandLogo from "../../assets/Jpegs/optiLogo.jpg";

const IsLoading = () => {
return (
<div>
<div>
  <div>
    <img src={iStandLogo} />
    <i>I Stand To Give Foundation</i>
  </div>
  <FallingLines color="#1c15e7" width="100" visible={true} />
  <p>Loading...</p>
</div>
</div>
);
};

export default IsLoading;