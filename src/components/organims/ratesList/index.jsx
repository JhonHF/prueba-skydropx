import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createLabel } from "../../../services/labels";
import {
  resetForm,
  setLabelUrl,
  setRateId,
} from "../../../store/shipmentForm/actions";
import { Card } from "../../atoms/card";
import { FormStepper } from "../../molecules/formStepper";

export const RatesList = ({ nextStep, previousStep }) => {
  const dispatch = useDispatch();
  const { rateOptions } = useSelector((state) => state.shipmentForm);

  const [disabledSubmit, setDisabledSubmit] = useState(false);
  const [selectedRate, setRate] = useState("");

  const handleSubmitRates = async () => {
    try {
      setDisabledSubmit(true);
      const response = await createLabel(selectedRate);
      dispatch(setLabelUrl(response));
      nextStep();
    } catch (error) {
      console.log("apierror", error);
      setDisabledSubmit(false);
    }
  };

  const handleStepperOptions = [
    {
      label: "Cancelar",
      type: "button",
      onClick: () => dispatch(resetForm()),
    },
    {
      label: "Volver",
      type: "button",
      onClick: () => {
        dispatch(setRateId(null));
        previousStep();
      },
    },
    {
      label: "Siguiente",
      type: "button",
      onClick: () => {
        if (selectedRate) handleSubmitRates();
      },
      disabled: disabledSubmit,
    },
  ];

  const handleSelectRate = (id) => setRate(id);

  const renderRate = ({ id, attributes }) => (
    <Card
      key={id}
      selected={id === selectedRate}
      className="m-3"
      onClick={handleSelectRate(id)}
    >
      <h5 className="card-title">Proveedor: {attributes.provider}</h5>
      <p className="card-text">Servicio {attributes.service_level_name}</p>
      <p className="card-text">Días {attributes.days}</p>
      <h6 className="card-subtitle mb-2 text-muted">
        {`Precio Total: ${attributes.currency_local} $${attributes.total_pricing}`}
      </h6>
    </Card>
  );

  return (
    <div>
      {rateOptions.map(renderRate)}
      <FormStepper listOptions={handleStepperOptions} />
    </div>
  );
};
