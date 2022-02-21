export const shippingCreationMapper = (shippingData) => {
  const { weight, distanceUnit, massUnit, height, width, length } =
    shippingData.packageInfo;

  return {
    address_from: { ...shippingData.shipperInfo },
    address_to: { ...shippingData.shipToInfo },
    parcels: [
      {
        weight: parseFloat(weight),
        distance_unit: distanceUnit,
        mass_unit: massUnit,
        height: parseFloat(height),
        width: parseFloat(width),
        length: parseFloat(length),
      },
    ],
    consignment_note_class_code: "53131600",
    consignment_note_packaging_code: "1H1",
  };
};

export const filterRateListMapper = (shippingCreationResponse) => {
  const {
    data: { included },
  } = shippingCreationResponse;

  return included.filter((included) => included.type === "rates");
};
