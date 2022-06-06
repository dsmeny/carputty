import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const animationKeyframe = keyframes`
from {
  opacity: 0;
}

to {
  opacity: 1;
}
`;

const ToastContainer = styled.div`
  background: ${(props) =>
    props.isMinSum ? "var(--gradient)" : "var(--gradient-warning)"};
  padding: 20px;
  border-radius: 10px;
  color: ${(props) =>
    props.isMinSum ? "var(--gradient-font)" : "var(--gradient-font-warning)"};
  font-size: 1.3rem;
  position: absolute;
  animation: ${animationKeyframe} 1s ease both;
  top: 0rem;
  width: 34rem;

  &:after {
    content: "hola";
    color: transparent;
    position: absolute;
    top: 64px;
    z-index: 1;
    width: 1rem;
    height: 1rem;
    left: ${(props) =>
      props.percent >= 98 ? props.percent - 6 : props.percent + 2}%;
    background: var(--gradient);
    padding: 10px;
    transform: rotate(180deg);
    clip-path: polygon(68% 42%, 134% 159%, 28% 100%);
    translate: all 1s ease;
    display: ${(props) => (props.isMinSum ? "initial" : "none")};
  }
`;

const Toast = (props) => {
  return <ToastContainer {...props}>{props.children}</ToastContainer>;
};

export default Toast;
