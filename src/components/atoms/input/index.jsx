import React from "react";
import { useField } from "formik";

export const Input = ({ label, name, className, ...rest }) => {
  const [input, meta] = useField(name);

  const errorClass = meta.error ? "is-invalid" : "";

  return (
    <div className={`form-group ${className}`}>
      {label && (
        <label htmlFor={name} className="form-label">
          {label}
        </label>
      )}
      <input
        className={`form-control ${errorClass}`}
        id={name}
        {...input}
        {...rest}
      />
      {meta.error && <div className="invalid-feedback">{meta.error}</div>}
    </div>
  );
};
