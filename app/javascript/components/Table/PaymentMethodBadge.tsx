import * as React from "react";
import visaImg from "images/visa.jpg";
import boletoImg from "images/boleto.jpg";

type PaymentMethods = "visa" | "boleto" | null;
interface IBadgeConfig {
  method: PaymentMethods;
  iconUrl: string;
}
const badgesConfig: IBadgeConfig[] = [
  {
    method: "visa",
    iconUrl: visaImg
  },
  {
    method: "boleto",
    iconUrl: boletoImg
  }
];

interface IPaymentMethodBadgeProps {
  method: PaymentMethods;
  style?: React.CSSProperties;
}
function PaymentMethodBadge(props: IPaymentMethodBadgeProps) {
  const { style } = props;
  const badgeConfig = badgesConfig.find(conf => conf.method === props.method);
  if (badgeConfig) {
    return (
      <img
        className="react-table__payment-method-badge"
        src={badgeConfig.iconUrl}
        style={style}
      />
    );
  } else {
    return <span>{"-"}</span>;
  }
}
export default PaymentMethodBadge;
