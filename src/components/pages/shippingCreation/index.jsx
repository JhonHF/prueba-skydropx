import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addPackageInfo,
  addRateList,
  addShipperInfo,
  addShiptoInfo,
  resetForm,
} from "../../../store/shipmentForm/actions";
import { createShipment } from "../../../services/shipments";
import { ShippingAddress } from "../../forms/shippingAddress";
import { ShippingParcel } from "../../forms/shippingParcel";
import { MainLayout } from "../../layouts/mainLayout";
import { LabelCreation } from "../../organims/labelCreation";
import { RatesList } from "../../organims/ratesList";

export const ShippingCreation = () => {
  const dispatch = useDispatch();
  const [step, setStep] = useState(0);
  const [disabledSubmit, setDisabledSubmit] = useState(false);
  const { shipperInfo, shipToInfo } = useSelector(
    (state) => state.shipmentForm
  );

  const handleNextStep = () => {
    setDisabledSubmit(false);
    setStep((prev) => prev + 1);
  };

  const handlePreviousStep = () => setStep((prev) => prev - 1);

  const handleAddressSubmit = (values) => {
    setDisabledSubmit(true);
    if (step === 0) {
      dispatch(addShipperInfo(values));
    } else {
      dispatch(addShiptoInfo(values));
    }
    handleNextStep();
  };

  const handleParcelSubmit = async (values) => {
    try {
      setDisabledSubmit(true);
      const res = await createShipment({
        shipperInfo,
        shipToInfo,
        packageInfo: values,
      });

      dispatch(addPackageInfo(values));
      dispatch(addRateList(res));
      handleNextStep();
    } catch (error) {
      console.log("apiError", error);
      setDisabledSubmit(false);
    }
  };

  const handleResetForm = () => dispatch(resetForm())

  const formSteps = [
    <ShippingAddress
      role="shipper"
      handleSubmit={handleAddressSubmit}
      disabledSubmit={disabledSubmit}
      previousStep={handlePreviousStep}
      initialValues={shipperInfo}
      resetForm={handleResetForm}
      key="0"
    />,
    <ShippingAddress
      role="shipTo"
      handleSubmit={handleAddressSubmit}
      disabledSubmit={disabledSubmit}
      previousStep={handlePreviousStep}
      initialValues={shipToInfo}
      resetForm={handleResetForm}
      key="1"
    />,

    <ShippingParcel
      handleSubmit={handleParcelSubmit}
      disabledSubmit={disabledSubmit}
      nextStep={handleNextStep}
      key="2"
    />,

    <RatesList
      nextStep={handleNextStep}
      previousStep={handlePreviousStep}
      key="3"
    />,

    <LabelCreation
      nextStep={handleNextStep}
      previousStep={handlePreviousStep}
      key="4"
    />,
  ];

  return <MainLayout>{formSteps[step]}</MainLayout>;
};
