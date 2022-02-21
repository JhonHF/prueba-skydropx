import axios from "axios";
import { filterRateListMapper, shippingCreationMapper } from "./mappers";

const shipmentEndpoint = "/v1/shipments/";

export const createShipment = async (shipmentInfo) => {
  const mappedShipmentData = shippingCreationMapper(shipmentInfo);
  const response = await axios.post(shipmentEndpoint, mappedShipmentData);

  return filterRateListMapper(response);
};

export const getAllShipments = () => {
  return axios.get(shipmentEndpoint);
};
