import * as React from "react";
import "antd/dist/antd.css";
import "../../../stylesheets/payment_table.scss";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

/*
type TableComponentProps<TableField> = { fields: TableField };

interface ITableProps<TableField> {
    values: TableField[];
    TableComponent: React.ComponentType<TableComponentProps<TableField>>;
}
function Table<TableField> (props: ITableProps<TableField>) {
    const {FormComponent}
    return (
        <props.values.forEach()>
    );
}*/
export type DataTypes =
  | "text"
  | "payment_method_badge"
  | "payment_status_badge"
  | "currency";

export interface IDataPoint {
  key: string;
}
export interface IColumnConfig {
  title: string;
  dataIndex: string;
  sorter?: () => -1 | 0 | 1;
  key?: string;
  bootstrapWidth?: number;
  dataType?: DataTypes;
}
interface ITableProps<IDataPointType extends IDataPoint> {
  dataSource: IDataPointType[];
  columns: IColumnConfig[];
}
function Table<IDataPointType extends IDataPoint>(
  props: ITableProps<IDataPointType>
) {
  const { columns: columnsConfig, dataSource } = props;
  checkValidColumnConfig(columnsConfig, dataSource);

  return (
    <div className="react-table">
      <TableHeader columnsConfig={columnsConfig} />
      {dataSource.map((dataPoint, index) => (
        <TableRow
          columnsConfig={columnsConfig}
          rowData={dataPoint}
          key={dataPoint.key ? dataPoint.key : index}
        />
      ))}
    </div>
  );
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
  return true;
}
export default Table;
