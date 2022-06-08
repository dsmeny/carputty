import { createContext, useContext, useMemo, useReducer } from "react";
import {
  donateReducer,
  initialState,
} from "../features/components/donate/helpers/useDonateReducer";

const DonateContext = createContext();

function DonateProvider(props) {
  const [projectDetails, dispatch] = useReducer(donateReducer, initialState);

  const value = useMemo(() => [projectDetails, dispatch], [projectDetails]);

  return <DonateContext.Provider value={value} {...props} />;
}

function useDonate() {
  const context = useContext(DonateContext);

  if (!context) {
    throw new Error(`useDonate context appears undefined`);
  }
  const [projectDetails, dispatch] = context;

  const donate = (amount) => dispatch({ type: "donate", payload: +amount });
  const overwrite = (serverState) =>
    dispatch({ type: "overwrite", payload: serverState });

  return {
    projectDetails,
    donate,
    overwrite,
  };
}

export { DonateProvider, useDonate };
