import axios from "axios";

const labelsEndpoint = "/v1/labels/";

export const createLabel = (shipmentInfo) => {
  return axios.post(labelsEndpoint, { rate_id: 95761, label_format: "pdf" });
};
