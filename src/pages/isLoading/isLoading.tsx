// import React from "react";

import { FallingLines } from "react-loader-spinner";

const IsLoading = () => {
    return (
        <div className="w-full h-[100vh] flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center">

                <i className="text-[#3F5BF6] text-[13px]">My To-do</i>

                <FallingLines color="#3F5BF6" width="100" visible={true} />

                <p className="text-[#3F5BF6] text-[17px]">Loading...</p>
            </div>
        </div>
    );
};

export default IsLoading;