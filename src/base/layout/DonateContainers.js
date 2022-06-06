import styled from "@emotion/styled";
import backgroundImg from "../../assets/background.png";

export const DonateContainer = styled.div`
  background-color: #fff;
  background-image: url(${backgroundImg});
  background-size: cover;
  background-repeat: no-repeat;
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6rem;
  overflow: hidden;
  position: relative;

  @media (max-width: 920px) {
    width: 100%;
    width: 95%;
    padding: 0.5rem;
  }

  & div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

export const DonateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: var(--shadow);
  gap: 3rem;
  overflow: hidden;
  height: 29rem;
`;

export const DonateSection = styled.div`
  opacity: ${(props) => (props.isCompleted ? 0 : 1)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  padding: 3vw;

  & h1 {
    font-family: var(--title-font);
    width: 27rem;
    color: var(--primary-color);
  }

  & p {
    font-family: var(--p-font);
    width: 20rem;
    color: var(--primary-color);
    opacity: 0.8;
  }
`;
