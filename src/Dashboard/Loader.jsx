// Import necessary dependencies
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { ThreeCircles } from "react-loader-spinner"

// Define keyframe animation for the hash loader
const hashAnimation = keyframes`
  0% {
    transform: scaleX(0);
  }
  50% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(0);
  }
`;

// Styled component for the Hash Loader container
const HashLoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); /* semi-transparent black background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 998;
`;

// Hash Loader component
const HashLoader = () => {
  return (
    <HashLoaderContainer>
      <ThreeCircles
        visible={true}
        height="100"
        width="100"
        color="#F71D00"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </HashLoaderContainer>
  );
};

// Export the HashLoader component
export default HashLoader;



