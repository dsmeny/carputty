import { useMemo, useEffect } from "react";
import styled from "@emotion/styled";
import Progress from "../../../../base/components/Progress";
import { useDonate } from "../../../../contexts/donate-context";
import { calcPercentage } from "../helpers/functions";

const DonateProgress = ({ setShowToast }) => {
  const { projectDetails } = useDonate();
  const { donationGoal, donationNeeded } = projectDetails;

  const ProgressWrapper = styled.div`
    -webkit-appearance: none;
    overflow: none;
    & progress {
      position: absolute;
      top: 0px;
      width: 100%;
    }
  `;

  const calculate = useMemo(
    () => calcPercentage(donationGoal, donationNeeded),
    [donationGoal, donationNeeded]
  );

  return (
    <Progress>
      <ProgressWrapper>
        <progress
          onMouseEnter={() => setShowToast(true)}
          id="progressBar"
          max="100"
          value={`${calculate}`}
        >
          70%
        </progress>
      </ProgressWrapper>
    </Progress>
  );
};

export default DonateProgress;
