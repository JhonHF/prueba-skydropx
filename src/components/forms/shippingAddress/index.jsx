import React from "react";
import { Form, Formik } from "formik";
import { commonFields, shipToExtraFields } from "./fieldList";
import { schemaValidation } from "./validations";
import { Input } from "../../atoms/input";
import { FormStepper } from "../../molecules/formStepper";

export const ShippingAddress = ({
  role,
  previousStep,
  handleSubmit,
  disabledSubmit,
  initialValues,
  resetForm,
}) => {

  const renderField = (fieldProps, index) => (
    <Input {...fieldProps} key={index} />
  );

  const renderCommonFields = commonFields.map(renderField);
  const renderExtraFields = shipToExtraFields.map(renderField);

  const handleStepperOptions = [
    {
      label: "Cancelar",
      type: "button",
      onClick: ()=> resetForm(),
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
      initialValues={initialValues}
      onSubmit={handleSubmit}
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
