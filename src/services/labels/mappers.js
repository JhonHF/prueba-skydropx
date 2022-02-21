export const labelCreationMapper = (rateId) => ({
  rate_id: parseInt(rateId),
  label_format: "pdf",
});

export const responseFilterMapper = (response) => {
  const {
    attributes, attributes: { status, label_url },
  } = response.data.data;

  const filteredData = {
    status,
    url: label_url,
  };

  if (attributes.error_message) {
    filteredData.error = attributes.error_message[0].message;
  }

  return filteredData;
};
