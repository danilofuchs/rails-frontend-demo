import * as React from "react";
import brImg from "images/br_flag.jpg";
import mxImg from "images/mx_flag.jpg";

type CountryCode = "BR" | "MX";
interface IBadgeConfig {
  countryCode: CountryCode;
  iconUrl: string;
}
const flagsConfig: IBadgeConfig[] = [
  {
    countryCode: "BR",
    iconUrl: brImg
  },
  {
    countryCode: "MX",
    iconUrl: mxImg
  }
];
interface ICountryFlagBadgeProps {
  countryCode: CountryCode;
}
function CountryFlagBadge(props: ICountryFlagBadgeProps) {
  const flagConfig = flagsConfig.find(
    conf => conf.countryCode.toLowerCase() === props.countryCode.toLowerCase()
  );
  if (flagConfig) {
    return (
      <img
        className="react-table__country-flag-badge"
        src={flagConfig.iconUrl}
      />
    );
  } else {
    return <span>{"-"}</span>;
  }
}
export default CountryFlagBadge;
