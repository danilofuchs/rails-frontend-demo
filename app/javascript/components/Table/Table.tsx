import * as React from "react";
const { useRef } = React;
import classNames from "classnames";
import axios from "axios";
import "antd/dist/antd.css";
import "../../../stylesheets/payment_table.scss";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import { Switch } from "antd";

export type DataTypes =
  | "text"
  | "payment_method_badge"
  | "payment_status_badge"
  | "currency";

export interface IDataPoint {
  key: string;
}
export interface ITableConfig {
  redirectUrlIndex?: string;
  backgroundHighlightParam?: string;
  isBackgroundHighlighted?: string;
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
  const highlightLinkRef = useRef<HTMLAnchorElement>();

  checkValidTableConfig(tableConfig, dataSource);
  checkValidColumnConfig(columnsConfig, dataSource);

  function handleBackgroundSwitchClick(isChecked: boolean) {
    const currentUrl = location.href;
    if (isChecked) {
      location.href = updateURLParameter(
        currentUrl,
        tableConfig.backgroundHighlightParam,
        "true"
      );
      highlightLinkRef.current.click();
    } else {
      location.href = updateURLParameter(
        currentUrl,
        tableConfig.backgroundHighlightParam,
        "false"
      );
      highlightLinkRef.current.click();
    }
  }

  async function handleBackgroundSwitchClickAPI() {
    const response = await axios.get("payments-toggle-background", {});
    console.log(response.data);
  }

  return (
    <div
      className={classNames(
        "react-table",
        tableConfig.isBackgroundHighlighted === "true"
          ? "react-table__highlight-background"
          : ""
      )}
    >
      <TableHeader columnsConfig={columnsConfig} />
      {dataSource.map((dataPoint, index) => (
        <TableRow
          tableConfig={tableConfig}
          columnsConfig={columnsConfig}
          rowData={dataPoint}
          key={dataPoint.key ? dataPoint.key : index}
        />
      ))}

      {tableConfig.backgroundHighlightParam &&
        tableConfig.isBackgroundHighlighted !== undefined && (
          <>
            <span className="react-table__toggle-container">
              <label className="react-table__toggle-label">
                Mostrar wrapper React (URL)
              </label>
              <Switch
                checked={tableConfig.isBackgroundHighlighted === "true"}
                onChange={handleBackgroundSwitchClick}
              />
              <a ref={highlightLinkRef} />
            </span>
            <span className="react-table__toggle-container">
              <label className="react-table__toggle-label">
                Mostrar wrapper React (API)
              </label>
              <Switch
                checked={tableConfig.isBackgroundHighlighted === "true"}
                onChange={handleBackgroundSwitchClickAPI}
              />
              <a ref={highlightLinkRef} />
            </span>
          </>
        )}
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
