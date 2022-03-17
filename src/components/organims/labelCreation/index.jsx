import React from "react";
import { useSelector } from "react-redux";

export const LabelCreation = () => {
  const { labelUrl } = useSelector((state) => state.shipmentForm);

  return (
    <div>
      <button type="button" disabled={!!labelUrl}>
        {labelUrl ? (
          <a href={labelUrl} target="_blank">
            Ver guia
          </a>
        ) : (
          "Guia no disponible"
        )}
      </button>
    </div>
  );
};
