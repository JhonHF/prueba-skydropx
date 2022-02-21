import { shipmentFormActionTypes } from "./actionTypes";

const {
  ADD_SHIPPER_INFO,
  ADD_SHIP_TO_INFO,
  ADD_PACKAGE_INFO,
  ADD_RATE_OPTIONS,
  SET_RATE_ID_SELECTED,
  SET_NEXT_STEP,
  SET_PREVIOUS_STEP,
  SET_LABEL_URL,
  RESET_FORM,
} = shipmentFormActionTypes;

const initialState = {
  shipperInfo: {
    province: "Ciudad de México",
    city: "Azcapotzalco",
    name: "Jose Fernando",
    zip: "",
    country: "MX",
    address1: "Av. Principal #234",
    company: "skydropx",
    address2: "Centro",
    phone: "5555555555",
    email: "skydropx@email.com",
  },
  shipToInfo: {
    province: "Jalisco",
    city: "Guadalajara",
    name: "Jorge Fernández",
    zip: "",
    country: "MX",
    address1: " Av. Lázaro Cárdenas #234",
    company: "-",
    address2: "Americana",
    phone: "5555555555",
    email: "ejemplo@skydropx.com",
    reference: "Frente a tienda de abarro",
    contents: "Juguetes",
  },
  packageInfo: {
    weight: "",
    distanceUnit: "CM",
    massUnit: "KG",
    height: "",
    width: "",
    length: "",
  },
  rateOptions: [],
  selectedRateId: null,
  labelUrl: "",
  shipmentFormStep: 0,
};

export const shipmentFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SHIPPER_INFO: {
      return {
        ...state,
        shipperInfo: { ...state.shipperInfo, ...action.payload },
      };
    }
    case ADD_SHIP_TO_INFO: {
      return {
        ...state,
        shipToInfo: { ...state.shipToInfo, ...action.payload },
      };
    }
    case ADD_PACKAGE_INFO: {
      return {
        ...state,
        packageInfo: { ...state.packageInfo, ...action.payload },
      };
    }
    case ADD_RATE_OPTIONS: {
      return {
        ...state,
        rateOptions: action.payload,
      };
    }
    case SET_RATE_ID_SELECTED: {
      return {
        ...state,
        selectedRateId: action.payload,
      };
    }
    case SET_NEXT_STEP: {
      return {
        ...state,
        shipmentFormStep: state.shipmentFormStep + 1,
      };
    }
    case SET_PREVIOUS_STEP: {
      return {
        ...state,
        shipmentFormStep: state.shipmentFormStep - 1,
      };
    }
    case SET_LABEL_URL: {
      return {
        ...state,
        labelUrl: action.payload,
      };
    }
    case RESET_FORM: {
      return { ...initialState };
    }
    default:
      return state;
  }
};
