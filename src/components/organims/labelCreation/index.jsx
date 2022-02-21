import React from "react";

export const LabelCreation = () => {
  const { labelUrl } = useSelector((state) => state.shipmentForm);

  return (
    <div>
      <button type="button">
        <a href={labelUrl} target="_blank">
          Ver guia
        </a>
      </button>
      {labelUrl}
    </div>
  );
};
