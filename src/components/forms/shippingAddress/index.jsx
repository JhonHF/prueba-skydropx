import React, { useState } from "react";
import { Form, Formik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { commonFields, shipToExtraFields } from "./fieldList";
import { schemaValidation } from "./validations";
import {
  addShipperInfo,
  addShiptoInfo,
  resetForm,
} from "../../../store/shipmentForm/actions";
import { Input } from "../../atoms/input";
import { FormStepper } from "../../molecules/formStepper";

export const ShippingAddress = ({ role, nextStep, previousStep }) => {
  const dispatch = useDispatch();
  const { shipperInfo, shipToInfo } = useSelector(
    (state) => state.shipmentForm
  );

  const [disabledSubmit, setDisabledSubmit] = useState(false);

  const initialValues = {
    shipper: shipperInfo,
    shipTo: shipToInfo,
  };

  const handleSubmit = {
    shipper: (values) => {
      setDisabledSubmit(true);
      dispatch(addShipperInfo(values));
      nextStep();
    },
    shipTo: (values) => {
      setDisabledSubmit(true);
      dispatch(addShiptoInfo(values));
      nextStep();
    },
  };

  const renderField = (fieldProps, index) => (
    <Input {...fieldProps} key={index} />
  );

  const renderCommonFields = commonFields.map(renderField);
  const renderExtraFields = shipToExtraFields.map(renderField);

  const handleStepperOptions = [
    {
      label: "Cancelar",
      type: "button",
      onClick: () => dispatch(resetForm()),
      disabled: role === "shipper",
    },
    {
      label: "Volver",
      type: "button",
      onClick: () => previousStep(),
      disabled: role === "shipper",
    },
    {
      label: "Siguiente",
      type: "submit",
      disabled: disabledSubmit,
    },
  ];

  return (
    <Formik
      initialValues={initialValues[role]}
      onSubmit={handleSubmit[role]}
      validationSchema={schemaValidation}
      enableReinitialize
    >
      {() => (
        <Form className="row">
          {renderCommonFields}
          {role === "shipTo" && renderExtraFields}
          <FormStepper listOptions={handleStepperOptions} />
        </Form>
      )}
    </Formik>
  );
};
