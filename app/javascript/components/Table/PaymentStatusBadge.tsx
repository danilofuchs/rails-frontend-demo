import * as React from "react";
import classNames from "classnames";

type PaymentStatus = "OP" | "PE" | "CA" | "CO" | "PA" | "NP" | "RE";
interface IBadgeConfig {
  status: PaymentStatus;
  className: string;
}
const badgesConfig: IBadgeConfig[] = [
  {
    status: "NP",
    className: "payment-status-badge-np"
  },
  {
    status: "RE",
    className: "payment-status-badge-re"
  },
  {
    status: "PA",
    className: "payment-status-badge-pa"
  },
  {
    status: "OP",
    className: ""
  },
  {
    status: "PE",
    className: "payment-status-badge-pe"
  },
  {
    status: "CA",
    className: "payment-status-badge-ca"
  },
  {
    status: "CO",
    className: "payment-status-badge-co"
  }
];

interface IPaymentStatusBadgeProps {
  status: PaymentStatus;
}
function PaymentStatusBadge(props: IPaymentStatusBadgeProps) {
  const badgeConfig = badgesConfig.find(
    conf => conf.status.toLowerCase() === props.status.toLowerCase()
  );
  if (badgeConfig) {
    return (
      <div
        className={classNames(
          "react-table__payment-status-badge",
          `react-table__${badgeConfig.className}`
        )}
      >
        <span className="react-table__payment-status-badge-text">
          {props.status.toUpperCase()}
        </span>
      </div>
    );
  } else {
    return <span>{"-"}</span>;
  }
}
export default PaymentStatusBadge;
