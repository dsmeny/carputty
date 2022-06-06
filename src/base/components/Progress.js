import React from "react";
import styled from "@emotion/styled";

const ProgressContainer = styled.div`
  position: relative;

  & progress {
    -webkit-appearance: none;
  }
  & ::-webkit-progress-bar {
    background-color: var(--highlight-dim-color);
    height: 1.8rem;
  }
  & ::-webkit-progress-value {
    background-color: var(--highlight-color);
  }
`;

const Progress = (props) => {
  return <ProgressContainer {...props}>{props.children}</ProgressContainer>;
};

export default Progress;
