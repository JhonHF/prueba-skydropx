import { createStore, combineReducers } from "redux";
import { shipmentFormReducer } from "./shipmentForm/reducers";

const rootReducers = combineReducers({
  shipmentForm: shipmentFormReducer,
});

export const applicationStore = createStore(rootReducers);
