import * as React from "react";

export interface ICurrencyData {
  amount: string;
  currency: string;
}
interface IFormattedCurrencyProps {
  value: ICurrencyData;
}
function FormattedCurrency(props: IFormattedCurrencyProps) {
  const { value } = props;
  if (isValidCurrencyData(value)) {
    return <span>{`${value.currency} ${value.amount}`}</span>;
  } else {
    console.warn("Invalid currency data found");
    return <span>{"-"}</span>;
  }
}
function isValidCurrencyData(value?: ICurrencyData) {
  return value && value.amount && value.currency;
}
export default FormattedCurrency;
