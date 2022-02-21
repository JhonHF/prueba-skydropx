import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ShippingAddress } from "../../forms/shippingAddress";
import { ShippingParcel } from "../../forms/shippingParcel";
import { MainLayout } from "../../layouts/mainLayout";
import { LabelCreation } from "../../organims/labelCreation";
import { RatesList } from "../../organims/ratesList";

export const ShippingCreation = () => {
  const [step, setStep] = useState(0);

  const handleNextStep = () => setStep((prev) => prev + 1);
  const handlePreviousStep = () => setStep((prev) => prev - 1);

  const formSteps = {
    0: (
      <ShippingAddress
        role="shipper"
        nextStep={handleNextStep}
        previousStep={handlePreviousStep}
        key={0}
      />
    ),
    1: (
      <ShippingAddress
        role="shipTo"
        nextStep={handleNextStep}
        previousStep={handlePreviousStep}
        key={1}
      />
    ),
    2: (
      <ShippingParcel
        nextStep={handleNextStep}
        previousStep={handlePreviousStep}
        key={2}
      />
    ),

    3: (
      <RatesList
        nextStep={handleNextStep}
        previousStep={handlePreviousStep}
        key={3}
      />
    ),
    4: (
      <LabelCreation
        nextStep={handleNextStep}
        previousStep={handlePreviousStep}
        key={4}
      />
    ),
  };

  return <MainLayout>{formSteps[step]}</MainLayout>;
};
