import { DONATION_MODEL } from "../../../../constants";

export const initialState = {
  ...DONATION_MODEL,
};

export const donateReducer = (state, action) => {
  switch (action.type) {
    case "donate": {
      return {
        ...state,
        donationNeeded: state.donationNeeded - action.payload,
        totalDonators: state.totalDonators + 1,
      };
    }
    case "overwrite": {
      return {
        ...action.payload,
      };
    }
    default:
      return {
        ...state,
      };
  }
};
