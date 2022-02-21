import React, { useState } from "react";
import { Form, Formik } from "formik";
import { useSelector, useDispatch } from "react-redux";

import { parcelFieldsList } from "./fieldList";
import { Input } from "../../atoms/input";
import { FormStepper } from "../../molecules/formStepper";

import { schemaValidation } from "./validations";
import { createShipment } from "../../../services/shipments";
import {
  resetForm,
  addRateList,
  addPackageInfo,
} from "../../../store/shipmentForm/actions";

export const ShippingParcel = ({ nextStep, previousStep }) => {
  const dispatch = useDispatch();
  const { packageInfo, shipperInfo, shipToInfo } = useSelector(
    (state) => state.shipmentForm
  );

  const [disabledSubmit, setDisabledSubmit] = useState(false);

  const handleSubmit = async (values) => {
    try {
      setDisabledSubmit(true);
      const res = await createShipment({
        shipperInfo,
        shipToInfo,
        packageInfo: values,
      });

      dispatch(addPackageInfo(values));
      dispatch(addRateList(res));
      nextStep();
    } catch (error) {
      console.log("apiError", error);
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
