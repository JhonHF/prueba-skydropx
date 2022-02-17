import axios from "axios";

const shipmentEndpoint = "/v1/shipments/";

export const createShipment = (shipmentInfo) => {
  return axios.post(shipmentEndpoint, {
    address_from: {
      province: "Ciudad de México",
      city: "Azcapotzalco",
      name: "Jose Fernando",
      zip: "02900",
      country: "MX",
      address1: "Av. Principal #234",
      company: "skydropx",
      address2: "Centro",
      phone: "5555555555",
      email: "skydropx@email.com",
    },
    parcels: [
      {
        weight: 3,
        distance_unit: "CM",
        mass_unit: "KG",
        height: 10,
        width: 10,
        length: 10,
      },
    ],
    address_to: {
      province: "Jalisco",
      city: "Guadalajara",
      name: "Jorge Fernández",
      zip: "44100",
      country: "MX",
      address1: " Av. Lázaro Cárdenas #234",
      company: "-",
      address2: "Americana",
      phone: "5555555555",
      email: "ejemplo@skydropx.com",
      reference: "Frente a tienda de abarro",
      contents: "toys",
    },
    consignment_note_class_code: "53131600",
    consignment_note_packaging_code: "1H1",
  });
};

export const getAllShipments = () => {
  return axios.get(shipmentEndpoint);
};
