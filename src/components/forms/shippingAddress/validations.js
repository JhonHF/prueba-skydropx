import { object, number } from "yup";

const requiredMessage = "Este campo es requerido";
const numberType = "Este campo debe ser de tipo numerico"
const integerNumberMessage = "Debe ser un numero sentero";
const positiveNumberMessage = "Debe ser un numero positivo";

export const schemaValidation = object({
  zip: number().typeError(numberType)
    .required(requiredMessage)
    .integer(integerNumberMessage)
    .positive(positiveNumberMessage),
});
