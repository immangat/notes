import {TailSpin} from "react-loader-spinner";
import React from "react";
import {LoadingSpinnerContainer} from "./loading-spinner.styles";


const LoadingSpinner = () => {
    return (
        <LoadingSpinnerContainer>
            <TailSpin
                height="80"
                width="80"
                color="black"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
            <h1>Loading Notes</h1>
        </LoadingSpinnerContainer>)
}

export default LoadingSpinner