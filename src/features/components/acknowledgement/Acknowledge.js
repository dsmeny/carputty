import React from "react";
import styled from "@emotion/styled";

const AcknowledgeContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.8rem;
  font-family: var(--p-font);
`;

const Acknowledge = () => {
  return (
    <AcknowledgeContainer>
      <p>Thank you!</p>
    </AcknowledgeContainer>
  );
};

export default Acknowledge;
