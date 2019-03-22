import * as React from "react";
const { useRef, useState } = React;
import classNames from "classnames";
// import axios from "axios";
import "antd/dist/antd.css";
import "../../../stylesheets/payment_table.scss";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import { Switch } from "antd";

export type DataTypes =
  | "text"
  | "payment_method_badge"
  | "payment_status_badge"
  | "currency"
  | "country_flag"
  | "date";

export interface IDataPoint {
  key: string;
}
export interface ITableConfig {
  redirectUrlIndex?: string;
}
export interface IColumnConfig {
  title: string;
  dataIndex: string;
  key?: string;
  bootstrapWidth?: number;
  dataType?: DataTypes;
}
interface ITableProps<IDataPointType extends IDataPoint> {
  dataSource: IDataPointType[];
  tableConfig: ITableConfig;
  columnsConfig: IColumnConfig[];
}
function Table<IDataPointType extends IDataPoint>(
  props: ITableProps<IDataPointType>
) {
  const { dataSource, tableConfig, columnsConfig } = props;
  const [isBackgroundHighlighted, setBackgroundHighlighted] = useState(false);
  const highlightLinkRef = useRef<HTMLAnchorElement>();

  checkValidTableConfig(tableConfig, dataSource);
  checkValidColumnConfig(columnsConfig, dataSource);

  async function handleBackgroundSwitchClickAPI(isChecked: boolean) {
    const backgroundDiv = document.getElementById("rails-background");
    if (isChecked) {
      backgroundDiv.classList.add("ruby-container-highlight-background");
    } else {
      backgroundDiv.classList.remove("ruby-container-highlight-background");
    }
    setBackgroundHighlighted(isChecked);
  }

  return (
    <div
      className={classNames(
        "react-table",
        isBackgroundHighlighted ? "react-table__highlight-background" : ""
      )}
    >
      <TableHeader columnsConfig={columnsConfig} />
      <div className="react-table__rows-container">
        {dataSource.map((dataPoint, index) => (
          <TableRow
            tableConfig={tableConfig}
            columnsConfig={columnsConfig}
            rowData={dataPoint}
            key={dataPoint.key ? dataPoint.key : index}
          />
        ))}
      </div>
      <>
        <span className="react-table__toggle-container">
          <label className="react-table__toggle-label">
            Mostrar wrapper React
          </label>
          <Switch
            checked={isBackgroundHighlighted}
            onChange={handleBackgroundSwitchClickAPI}
          />
          <a ref={highlightLinkRef} />
        </span>
      </>
    </div>
  );
}

function checkValidTableConfig(tableConfig: ITableConfig, dataSource: {}[]) {
  dataSource.forEach((dataPoint, index) => {
    const { redirectUrlIndex } = tableConfig;
    if (redirectUrlIndex) {
      if (!dataPoint.hasOwnProperty(redirectUrlIndex)) {
        throw new Error(
          `dataSource[${index}] has no key ${redirectUrlIndex}. If that is expected, set is as null`
        );
      }
    }
  });
  return;
}
function checkValidColumnConfig(
  columnConfig: IColumnConfig[],
  dataSource: {}[]
) {
  if (!dataSource) {
    throw new Error("No dataSource provided");
  }
  const columnIndexes = columnConfig.map(
    columnConfig => columnConfig.dataIndex
  );
  dataSource.forEach((dataPoint, index) => {
    columnIndexes.forEach(dataIndex => {
      if (!dataPoint.hasOwnProperty(dataIndex)) {
        throw new Error(
          `dataSource[${index}] has no key ${dataIndex}. If that is expected, set is as null`
        );
      }
    });
  });
  return;
}

/**
 * http://stackoverflow.com/a/10997390/11236
 */
function updateURLParameter(url: string, param: string, newParamValue: string) {
  let newAdditionalURL = "";
  let tempArray = url.split("?");
  const baseURL = tempArray[0];
  const additionalURL = tempArray[1];
  let temp = "";
  if (additionalURL) {
    const tempArray = additionalURL.split("&");
    for (let i = 0; i < tempArray.length; i++) {
      if (tempArray[i].split("=")[0] != param) {
        newAdditionalURL += temp + tempArray[i];
        temp = "&";
      }
    }
  }

  const rows_txt = temp + "" + param + "=" + newParamValue;
  return baseURL + "?" + newAdditionalURL + rows_txt;
}
export default Table;
