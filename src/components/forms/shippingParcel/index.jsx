import React, { useState } from "react";
import { Form, Formik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { parcelFieldsList } from "./fieldList";
import { Input } from "../../atoms/input";
import { FormStepper } from "../../molecules/formStepper";
import { schemaValidation } from "./validations";
import { resetForm } from "../../../store/shipmentForm/actions";

export const ShippingParcel = ({
  previousStep,
  disabledSubmit,
  handleSubmit,
}) => {
  const dispatch = useDispatch();
  const { packageInfo } = useSelector((state) => state.shipmentForm);

  const handleStepperOptions = [
    {
      label: "Cancelar",
      type: "button",
      onClick: () => dispatch(resetForm()),
    },
    {
      label: "Volver",
      type: "button",
      onClick: () => previousStep(),
    },
    {
      label: "Siguiente",
      type: "submit",
      disabled: disabledSubmit,
    },
  ];

  return (
    <Formik
      initialValues={packageInfo}
      onSubmit={handleSubmit}
      validationSchema={schemaValidation}
      enableReinitialize
    >
      {() => (
        <Form className="row">
          {parcelFieldsList.map((fieldProps, index) => (
            <Input {...fieldProps} key={index} />
          ))}
          <FormStepper listOptions={handleStepperOptions} />
        </Form>
      )}
    </Formik>
  );
};
