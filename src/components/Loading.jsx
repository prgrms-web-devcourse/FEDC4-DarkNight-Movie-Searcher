import React from 'react';
import styled from 'styled-components';

const LoadingAni = styled.div`
  & {
    width: 100vw;
    height: 100vh;
  }
  & > span {
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: gray;
    border-radius: 50%;
    animation: loading 1s 0s linear infinite;
  }

  & > span:nth-child(1) {
    animation-delay: 0s;
    background-color: red;
  }

  & > span:nth-child(2) {
    animation-delay: 0.2s;
    background-color: orange;
  }

  & > span:nth-child(3) {
    animation-delay: 0.4s;
    background-color: yellowgreen;
  }

  @keyframes loading {
    0%,
    100% {
      opacity: 0;
      transform: scale(0.5);
    }
    50% {
      opacity: 1;
      transform: scale(1.2);
    }
  }
`;
export default function Loading() {
  return <LoadingAni />;
}
