import * as React from "react";

interface IFormattedDateProps {
  date: string;
}
function FormattedDate(props: IFormattedDateProps) {
  return <div style={{ background: "#898989" }}>{props.date}</div>;
}
export default FormattedDate;
