import * as React from "react";
import "antd/dist/antd.css";
import "../../../stylesheets/payment_table.scss";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

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
  checkValidTableConfig(tableConfig, dataSource);
  checkValidColumnConfig(columnsConfig, dataSource);

  return (
    <div className="react-table">
      <TableHeader columnsConfig={columnsConfig} />
      {dataSource.map((dataPoint, index) => (
        <TableRow
          tableConfig={tableConfig}
          columnsConfig={columnsConfig}
          rowData={dataPoint}
          key={dataPoint.key ? dataPoint.key : index}
        />
      ))}
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
export default Table;
