import { useMemo, useState, useEffect } from "react";
import { useDonate } from "../../../../contexts/donate-context";
import {
  getDateObj,
  getRemainingDays,
} from "../helpers/donationDurationHandler";
import { postDonation } from "../helpers/functions";
import DonateForm from "./DonateForm";
import DonateProgress from "./DonateProgress";
import DonateToast from "./DonateToast";
import Acknowledge from "../../acknowledgement/Acknowledge";
import {
  DonateContainer,
  DonateWrapper,
  DonateSection,
} from "../../../../base/layout/DonateContainers";

const Donate = () => {
  const { projectDetails, donate, overwrite } = useDonate();
  const [postUpdate, setPostUpdate] = useState(false);
  const [isMinSum, setIsMinSum] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const [currentDate, setCurrentDate] = useState(getDateObj);

  const startDate = useMemo(
    () => getDateObj(projectDetails.startDate),
    [projectDetails.startDate]
  );

  const remainingDays = useMemo(
    () =>
      getRemainingDays(
        getDateObj,
        projectDetails.startDate,
        projectDetails.donationDuration,
        startDate,
        currentDate
      ),
    [
      projectDetails.donationDuration,
      currentDate,
      startDate,
      projectDetails.startDate,
    ]
  );

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:3002/api");
      const data = await response.json();
      if (data.data !== "field does not exist") {
        overwrite(data.data);
      }
    })();

    if (showToast && projectDetails.donationNeeded > 0) {
      setTimeout(() => setShowToast(false), 2100);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showToast, projectDetails.donationNeeded]);

  useEffect(() => {
    if (postUpdate) {
      postDonation(projectDetails);
    }
    let timer;
    if (!isMinSum) {
      timer = setTimeout(() => setIsMinSum(true), 2000);
    }

    return () => {
      setPostUpdate(false);
      clearTimeout(timer);
    };
  }, [postUpdate, projectDetails, isMinSum]);

  const formSubmitHandler = (amount) => {
    if (amount < projectDetails.donationMin) {
      setIsMinSum(false);
      setShowToast(true);
    } else if (
      amount >= projectDetails.donationMin &&
      remainingDays > 0 &&
      !projectDetails.donationNeeded <= 0
    ) {
      donate(amount);
      setShowToast(true);
    }
    if (isMinSum && !projectDetails.donationNeeded <= 0) setPostUpdate(true);
  };

  return (
    <DonateContainer>
      <div>
        <DonateToast isMinSum={isMinSum} showToast={showToast} />
        <DonateWrapper>
          <DonateProgress setShowToast={setShowToast} />
          <DonateSection isCompleted={projectDetails.donationNeeded <= 0}>
            <h1>{`Only ${
              remainingDays <= 0 ? 0 : remainingDays
            } days left to fund this project`}</h1>
            <p>
              Join the
              <strong> {`${projectDetails.totalDonators}`} </strong> other
              donors who have already supported this project.
            </p>
            <DonateForm
              formSubmitHandler={formSubmitHandler}
              isMinSum={isMinSum}
            />
          </DonateSection>
          {projectDetails.donationNeeded <= 0 && <Acknowledge />}
        </DonateWrapper>
      </div>
    </DonateContainer>
  );
};

export default Donate;
