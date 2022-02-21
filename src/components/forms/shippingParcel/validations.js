import { object, number } from "yup";

const requiredMessage = "Este campo es requerido";
const numberType = "Este campo debe ser de tipo numerico";
const positiveNumberMessage = "Debe ser un numero positivo";

const measuresValidations =  number()
.typeError(numberType)
.required(requiredMessage)
.positive(positiveNumberMessage)

export const schemaValidation = object({
  weight: measuresValidations,
  height: measuresValidations,
  width: measuresValidations,
  length: measuresValidations,
});
