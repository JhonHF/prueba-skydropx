import axios from "axios";
import { labelCreationMapper, responseFilterMapper } from "./mappers";

const labelsEndpoint = "/v1/labels/";

export const createLabel = async (rateId) => {
  const body = labelCreationMapper(rateId);
  const response = await axios.post(labelsEndpoint, body);
  const filteredData = responseFilterMapper(response);

  if (filteredData.status === "ERROR" || filteredData.error) {
    throw filteredData.error;
  }

  return filteredData.url;
};
