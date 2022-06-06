import { useMemo } from "react";
import Toast from "../../../../base/components/Toast";
import { useDonate } from "../../../../contexts/donate-context";
import { convertNumber } from "../helpers/functions";
import { calcPercentage } from "../helpers/functions";

const DonateToast = ({ isMinSum, showToast }) => {
  const { projectDetails } = useDonate();
  const { donationGoal, donationNeeded, donationMin } = projectDetails;

  const numberConversion = useMemo(
    () => convertNumber(projectDetails.donationNeeded),
    [projectDetails.donationNeeded]
  );

  const calculate = useMemo(
    () => calcPercentage(donationGoal, donationNeeded),
    [donationGoal, donationNeeded]
  );

  return (
    <>
      {showToast && (
        <Toast percent={calculate} isMinSum={isMinSum}>
          {!isMinSum && (
            <label htmlFor="progressBar">
              Oops! The minimum pledge is
              <strong>{` $${donationMin} dollars".`}</strong>
            </label>
          )}
          {isMinSum && !projectDetails.donationNeeded <= 0 && (
            <label htmlFor="progressBar">
              {`$${numberConversion} still needed to fund this project`}
            </label>
          )}
          {projectDetails.donationNeeded <= 0 && (
            <label htmlFor="progressBar">
              {`Congratulations!!! We have raised $${donationGoal} dollars!!`}
            </label>
          )}
        </Toast>
      )}
    </>
  );
};

export default DonateToast;
