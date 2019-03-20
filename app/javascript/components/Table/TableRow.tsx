import * as React from "react";
import { Row, Col } from "antd";
import { IColumnConfig } from "./Table";

interface ITableRowProps {
  columnsConfig: IColumnConfig[];
  rowData: {};
}
function TableRow(props: ITableRowProps) {
  const { rowData, columnsConfig } = props;
  return (
    <Row className="react-table__row">
      {columnsConfig.map(columnConfig => (
        <Col
          className="react-table__row-item"
          span={columnConfig.bootstrapWidth * 2}
          key={columnConfig.key ? columnConfig.key : columnConfig.dataIndex}
        >
          {rowData[columnConfig.dataIndex]}
        </Col>
      ))}
    </Row>
  );
}
export default TableRow;
