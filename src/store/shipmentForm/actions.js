import { shipmentFormActionTypes } from "./actionTypes";

export const addShipperInfo = (shipperData) => ({
  type: shipmentFormActionTypes.ADD_SHIPPER_INFO,
  payload: shipperData,
});
export const addShiptoInfo = (shipToData) => ({
  type: shipmentFormActionTypes.ADD_SHIP_TO_INFO,
  payload: shipToData,
});

export const addPackageInfo = (packageData) => ({
  type: shipmentFormActionTypes.ADD_PACKAGE_INFO,
  payload: packageData,
});

export const addRateList = (listRates) => ({
  type: shipmentFormActionTypes.ADD_RATE_OPTIONS,
  payload: listRates,
});

export const setRateId = (rateId) => ({
  type: shipmentFormActionTypes.SET_RATE_ID_SELECTED,
  payload: rateId,
});

export const setNextStep = () => ({
  type: shipmentFormActionTypes.SET_NEXT_STEP,
});

export const setPreviousStep = () => ({
  type: shipmentFormActionTypes.SET_PREVIOUS_STEP,
});

export const setLabelUrl = (url) => ({
  type: shipmentFormActionTypes.SET_LABEL_URL,
  payload: url,
});

export const resetForm = () => ({
  type: shipmentFormActionTypes.RESET_FORM,
});
