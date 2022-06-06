import { useEffect } from "react";
import styled from "@emotion/styled";
import Donate from "../features/components/donate/components/Donate";
import { DonateProvider } from "../contexts/donate-context";

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const App = () => {
  return (
    <DonateProvider>
      <AppContainer>
        <Donate />
      </AppContainer>
    </DonateProvider>
  );
};

export default App;
