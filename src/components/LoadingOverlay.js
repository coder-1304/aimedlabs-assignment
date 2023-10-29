import React from "react";
import styled from "styled-components";

const LoadingOverlay = () => {
  return (
    <StyledLoadingOverlay>
      <div className="loading-spinner"></div>
      <div className="text">Please Wait</div>
    </StyledLoadingOverlay>
  );
};

const StyledLoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.862);

  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  z-index: 9999;

  .loading-spinner {
    border: 4px solid rgba(255, 255, 255, 0.3);
    border-top: 4px solid #fff;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    animation: spin 0.6s linear infinite;
  }

  .text {
    margin-top: 6px;
    color: rgb(242, 242, 242);
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export default LoadingOverlay;
